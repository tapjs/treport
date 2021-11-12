const React = require('react')
const {Box, Text} = require('ink')
const importJSX = require('import-jsx')
const Color = importJSX('../../color.js')

module.exports = ({ fail, pass, todo, skip, total }) => (
  <Box>
    <Box width={10}>
      <Color bold><Text>Suites:</Text></Color>
    </Box>
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
      <Text>{todo + pass + skip + fail} of {total} completed</Text>
    </Box>
  </Box>
)
