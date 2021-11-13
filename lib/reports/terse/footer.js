const React = require('react')
const {Box, Text} = require('ink')
const importJSX = require('import-jsx')
const Reset = importJSX('../../reset.js')
const AssertCounts = importJSX('../base/assert-counts.js')
const SuiteCounts = importJSX('../base/suite-counts.js')

module.exports = ({suiteCounts, assertCounts, time}) => (
  <Reset><Box flexDirection="column">
    <SuiteCounts {...suiteCounts} />
    <AssertCounts {...assertCounts} />
  </Box></Reset>
)
