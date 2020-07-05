const React = require('react')
const ms = require('ms')
const {Box, Text} = require('ink')
const importJSX = require('import-jsx')
const AssertCounts = importJSX('./assert-counts.js')
const SuiteCounts = importJSX('./suite-counts.js')

module.exports = ({suiteCounts, assertCounts, time}) => (
  <Box flexDirection="column">
    <SuiteCounts {...suiteCounts} />
    <AssertCounts {...assertCounts} />
    <Box>
      <Box width={10}>
        <Text bold dimColor>Time:</Text>
      </Box>
      <Text bold dimColor>{ms(time)}</Text>
    </Box>
  </Box>
)
