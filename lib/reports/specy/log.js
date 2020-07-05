const React = require('react')
const importJSX = require('import-jsx')
const {Static, Box, Text} = require('ink')
const TestPoint = importJSX('./test-point.js')

module.exports = ({log}) => (
  <Static items={log.filter(result => !result.test)}>{
    (result, i) =>
        result.res ? (<TestPoint key={`${i}`} res={result.res} />)
        : (<Box key={`${i}`}><Text>{result.raw}</Text></Box>)
  }</Static>
)
