const React = require('react')
const ms = require('ms')
const {Box, Text} = require('ink')
const importJSX = require('import-jsx')
const Color = importJSX('../../color.js')
const AssertCounts = importJSX('./assert-counts.js')
const SuiteCounts = importJSX('./suite-counts.js')

module.exports = ({suiteCounts, assertCounts, time}) => (
  <Box flexDirection="column">
    <SuiteCounts {...suiteCounts} />
    <AssertCounts {...assertCounts} />
    <Box>
      <Box width={10}>
        <Color bold dim><Text>Time:</Text></Color>
      </Box>
      <Box>
        <Color bold dim><Text>{ms(time)}</Text></Color>
      </Box>
    </Box>
  </Box>
)
