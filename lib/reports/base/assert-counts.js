const React = require('react')
const {Box, Text} = require('ink')
const importJSX = require('import-jsx')
const Color = importJSX('../../color.js')

module.exports = ({fail, pass, todo, skip}) => (
  <Box>
    <Box width={10}>
      <Color bold><Text>Asserts:</Text></Color>
    </Box>
    <Text>{ !fail && !pass && !todo && !skip ? '0 ' : '' }</Text>
    { fail ? (
      <Box>
        <Color red><Text>{fail} failed</Text></Color>
        <Box><Text>{', '}</Text></Box>
      </Box>
    ) : <Text></Text>}
    { pass ? (
      <Box>
        <Color green><Text>{pass} passed</Text></Color>
        <Box><Text>{', '}</Text></Box>
      </Box>
    ) : <Text></Text>}
    { todo ? (
      <Box>
        <Color magenta><Text>{todo} todo</Text></Color>
        <Box><Text>{', '}</Text></Box>
      </Box>
    ) : <Text></Text>}
    { skip ? (
      <Box>
        <Color cyan><Text>{skip} skip</Text></Color>
        <Box><Text>{', '}</Text></Box>
      </Box>
    ) : <Text></Text>}
    <Box>
      <Text>of {pass + fail + todo + skip}</Text>
    </Box>
  </Box>
)
