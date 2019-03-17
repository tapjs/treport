const React = require('react')
const ms = require('ms')
const importJSX = require('import-jsx')
const {render, Static, Box} = require('ink')
const Parser = require('tap-parser')
const chalk = require('chalk')

const Summary = importJSX('./summary.js')
const Result = importJSX('./result.js')
const Runs = importJSX('./runs.js')

// little helper thing to get a single stream of filtered failures
const ParserAsserts = require('./parser-asserts.js')

class Report extends React.Component {
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
    })), 500)

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
    tap.on('subtestProcess', t => {
      if (!t.output && t.results && t.buffered)
        this.startTest(t)
    })
    tap.on('subtestStart', t => this.startTest(t))
    tap.on('subtestEnd', t => this.endTest(t))
    tap.on('end', () => this.endAll(tap))
    tap.on('bailout', message => this.bailout(message || true))

    // consume the text stream, but ignore it.
    // we get all we need from the child test objects.
    tap.resume()
  }

  bailout (bailout) {
    // move all the tests from pending to skipped
    this.setState(prevState => {
      return {
        ...prevState,
        runs: [],
        skip: prevState.skip.concat(prevState.runs.filter(t =>
          !t.results && !prevState.skip.some(test => test.name === t.name))
        .map(t => {
          t.options.skip = true
          t.results = { ok: true }
          return t
        })),
        bailout: (prevState.bailout || bailout),
      }
    })
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
    }))

    test
      .on('preprocess', options => options.stdio = 'pipe')
      .on('process', proc => {
        proc.stderr.setEncoding('utf8')
        proc.stderr.on('data', this.onRaw(test, 2))
      })
      .on('bailout', message => this.bailout(message || true))
      .on('end', () => this.setState(prevState => ({
        ...prevState,
        runs: prevState.runs.filter(t => t.name !== test.name)
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
      }))
    }
  }

  logRes (test, res) {
    res.testName = test.name
    this.setState(prevState => ({
      ...prevState,
      log: prevState.log.concat({res})
    }))
  }

  startTest (test) {
    test.startTime = Date.now()
    this.setState(prevState => (prevState.bailout ? prevState : {
      ...prevState,
      runs: prevState.runs.filter(t => t.name !== test.name)
        .concat(test),
    }))
  }

  endTest (test) {
    test.endTime = Date.now()
    if (!test.results)
      test.results = {}

    if (!test.results.count && this.state.bailout && !test.results.bailout) {
      test.options = { ...test.options, skip: true }
    }

    if (this.state.bailout && !(test.results && test.results.bailout)) {
      if (!test.results && test.results.count)
        test.options = {...test.options, skip: true}
      test.results = {...test.results, ok: true}
    }

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

    this.setState(prevState => (
      prevState.bailout && bucket === 'skip' ? prevState : {
        ...prevState,
        log: prevState.bailout ? prevState.log
          : prevState.log.concat({test}),
        runs: prevState.runs.filter(t => t.name !== test.name),
        [bucket]: prevState[bucket]
          .filter(t => t && t.name !== test.name)
          .concat(test),
      }))
  }

  endAll (tap) {
    clearInterval(this.timer)
    this.setState(prevState => ({
      ...prevState,
      results: tap.results,
    }))
  }

  render () {
    return (
      <Box flexDirection="column">
        <Log log={this.state.log} />
        <Runs runs={this.state.runs} />
        <Summary
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

module.exports = tap => render(<Report tap={tap} />)
