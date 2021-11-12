const React = require('react')
const {Box} = require('ink')
const importJSX = require('import-jsx')
const Color = importJSX('../../color.js')
const AssertCounts = importJSX('../base/assert-counts.js')
const SuiteCounts = importJSX('../base/suite-counts.js')

module.exports = ({suiteCounts, assertCounts, time}) => (
  <><Color reset /><Box flexDirection="column">
    <SuiteCounts {...suiteCounts} />
    <AssertCounts {...assertCounts} />
  </Box></>
)
