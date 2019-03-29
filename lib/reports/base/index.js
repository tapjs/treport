const React = require('react')
const ms = require('ms')
const importJSX = require('import-jsx')
const {Box} = require('ink')
const Parser = require('tap-parser')
const chalk = require('chalk')

const Summary = importJSX('./summary.js')
const Runs = importJSX('./runs.js')
const Log = importJSX('./log.js')

class Report extends React.Component {
  get Summary () {
    return Summary
  }
  get Runs () {
    return Runs
  }
  get Log () {
    return Log
  }

  constructor ({ tap }) {
    super()

    this.state = {
      // the stuff in the static section.  most importantly, errors in
      // real time, but also console output, test summaries, etc.
      log: [],

      // all tests, done and queued
      tests: [],

      // currently running
      runs: [],

      // finished tests
      pass: [],
      fail: [],
      todo: [],
      skip: [],

      // tap.results at the end
      results: null,

      // counts of all relevant test points
      // debounced on this.counts
      counts: {
        total: 0,
        pass: 0,
        fail: 0,
        skip: 0,
        todo: 0,
      },

      // total elapsed time, updated every half-second
      time: 0,

      bailout: null,
    }

    const start = Date.now()
    this.timer = setInterval(() => this.setState(prevState => ({
      ...prevState,
      time: Date.now() - start,
      counts: this.counts,
    })), 100)

    // keep counters on the object itself, to debounce
    this.counts = {
      total: 0,
      pass: 0,
      fail: 0,
      skip: 0,
      todo: 0,
    },
    this.counterBouncer = null

    tap.on('subtestAdd', t => this.addTest(t))
    tap.on('subtestStart', t => this.startTest(t))
    tap.on('subtestEnd', t => this.endTest(t))
    tap.on('end', () => this.endAll(tap))
    tap.once('bailout', message => this.bailout(tap.bailedOut))

    // consume the text stream, but ignore it.
    // we get all we need from the child test objects.
    tap.resume()
  }

  componentWillUnmount () {
    clearTimeout(this.counterBouncer)
    clearInterval(this.timer)
  }

  bailout (bailout) {
    return this.setState(prevState => ({
      ...prevState,
      runs: [],
      bailout,
      counts: this.counts,
    }))
  }

  inc (type) {
    this.counts.total++
    this.counts[type]++
    if (this.counterBouncer)
      return
    this.counterBouncer = setTimeout(() => {
      this.counterBouncer = null
      this.setState(prevState => ({
        ...prevState,
        counts: this.counts
      }))
    }, 50)
  }

  addTest (test) {
    this.setState(prevState => ({
      ...prevState,
      tests: prevState.tests.concat(test),
      counts: this.counts,
    }))

    test
      .on('preprocess', options => options.stdio = 'pipe')
      .on('process', proc => {
        proc.stderr.setEncoding('utf8')
        proc.stderr.on('data', this.onRaw(test, 2))
      })
      .on('end', () => this.setState(prevState => ({
        ...prevState,
        runs: prevState.runs.filter(t => t.name !== test.name),
        counts: this.counts,
      })))
      .parser
        .on('extra', this.onRaw(test, 1))
        .on('pass', res => this.inc('pass'))
        .on('todo', res => (this.inc('todo'), this.logRes(test, res)))
        .on('skip', res => (this.inc('skip'), this.logRes(test, res)))
        .on('fail', res => (this.inc('fail'), this.logRes(test, res)))
  }

  onRaw (test, fd) {
    const p = ` ${fd}>`
    return raw => {
      const pref = chalk.bold.dim(test.name + p + ' ')
      raw = raw.replace(/\n$/, '').replace(/^/gm, pref)
      this.setState(prevState => ({
        ...prevState,
        log: prevState.log.concat({raw}),
        counts: this.counts,
      }))
    }
  }

  logRes (test, res) {
    res.testName = test.name
    this.setState(prevState => ({
      ...prevState,
      log: prevState.log.concat({res}),
      counts: this.counts,
    }))
  }

  startTest (test) {
    test.startTime = Date.now()
    this.setState(prevState => ({
      ...prevState,
      runs: prevState.runs.filter(t => t.name !== test.name)
        .concat(test),
      counts: this.counts,
    }))
  }

  endTest (test) {
    test.endTime = Date.now()

    // put it in the appropriate bucket.
    // live update assertion handed by tap.parser event
    const ok = test.results && test.results.ok
    const skip = test.options.skip && ok !== false
    const todo = test.options.todo && ok !== false
    const bucket =
      skip ? 'skip'
      : todo ? 'todo'
      : !ok ? 'fail'
      : 'pass'

    this.setState(prevState => prevState.bailout ? prevState : ({
      ...prevState,
      log: prevState.log.concat({test}),
      runs: prevState.runs.filter(t => t.name !== test.name),
      [bucket]: prevState[bucket]
        .filter(t => t && t.name !== test.name)
        .concat(test),
      counts: this.counts,
    }))
  }

  endAll (tap) {
    clearInterval(this.timer)
    this.setState(prevState => ({
      ...prevState,
      results: tap.results,
      counts: this.counts,
    }))
  }

  render () {
    // XXX <Summary> should probably just get
    // summary={this.state.summary} for consistency?
    // Any reason why we can't put all this stuff on there?
    // Maybe we should have <Summary> only when it's finished,
    // and then call the always-on bit <Footer>?
    return (
      <Box flexDirection="column">
        <this.Log log={this.state.log} />
        <this.Runs runs={this.state.runs} />
        <this.Summary
          results={this.state.results || null}
          counts={this.state.counts}
          time={this.state.time}
          bailout={this.state.bailout}
          lists={{
            tests: this.state.tests,
            fail: this.state.fail,
            pass: this.state.pass,
            todo: this.state.todo,
            skip: this.state.skip,
          }} />
      </Box>
    )
  }
}

module.exports = Report
