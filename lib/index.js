const React = require('react')
const importJSX = require('import-jsx')
const Report = importJSX('./report.js')
const {render} = require('ink')
/* istanbul ignore next */
module.exports = tap => render(<Report tap={tap} />)
