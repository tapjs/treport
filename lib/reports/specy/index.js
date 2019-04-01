const React = require('react')
const importJSX = require('import-jsx')
const Base = importJSX('../base')
const Footer = importJSX('./footer.js')
const Log = importJSX('./log.js')
const Summary = importJSX('./summary.js')
const chalk = require('chalk')

const symbols = {
  ok: '✓',
  err: '✖',
}

const yaml = require('tap-yaml')

const getSymbol = r =>
  r.ok ? chalk.green(symbols.ok)
  : chalk.red(symbols.err)

class Specy extends Base {
  tapResume () {}

  constructor ({tap}) {
    super({tap})
    this.lastThing = null
    this.tap = tap
  }

  componentWillMount () {
    const tap = this.tap
    const onAssert = p => r => {
      const c = p.lastChild
      p.lastChild = null
      if (c && r.name === c.name)
        return

      const ind = new Array(p.level + 2).join('  ')
      const raw = ind + getSymbol(r) +
        ' ' +
        r.name + (
          r.diag ? '\n' + yaml.stringify(r.diag).replace(/^/gm, ind) : '')

      this.lastThing = 'assert'
      this.setState(prevState => ({
        ...prevState,
        log: prevState.log.concat({raw}),
      }))
    }
    const onParser = p => {
      if (p.parent)
        p.parent.lastChild = p
      p.on('child', onParser)
      p.on('assert', onAssert(p))
      const raw = (this.lastThing === 'assert' ? '\n' : '')
        + new Array(p.level + 1).join('  ') + p.name
      this.lastThing = 'suite'
      this.setState(prevState => ({
        ...prevState,
        log: prevState.log.concat({raw}),
      }))
    }
    onParser(tap.parser)
    tap.resume()
  }

  get Log () {
    return Log
  }
  get Footer () {
    return Footer
  }
  get Summary () {
    return Summary
  }
}

module.exports = Specy
