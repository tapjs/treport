const React = require('react')
const {render} = require('ink')
const importJSX = require('import-jsx')
/* istanbul ignore next */
module.exports = (tap, reporter = 'base') => {
  if (typeof reporter === 'function' &&
      reporter.prototype instanceof React.Component)
    return render(<reporter tap={tap} />)

  if (typeof reporter !== 'string' || !types.includes(reporter))
    throw new Error('unsupported report type: ' + reporter)

  const Report = importJSX('./reports/' + reporter)
  render(<Report tap={tap} />)
}
const types = module.exports.types = require('../types.js')
const cap = s => s.replace(/^./, $0 => $0.toUpperCase())
types.forEach(type =>
  Object.defineProperty(module.exports, cap(type), {
    get: () => importJSX(`./reports/${type}`),
    enumerable: true,
  }))
