const React = require('react')
const {Box, Text} = require('ink')

module.exports = ({ fail, pass, todo, skip, total }) => (
  <Box>
    <Box width={10}>
      <Text bold>Suites:</Text>
    </Box>
    { fail ? (
      <Box>
        <Text color="red">{fail} failed</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    { pass ? (
      <Box>
        <Text color="green">{pass} passed</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    { todo ? (
      <Box>
        <Text color="magenta">{todo} todo</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    { skip ? (
      <Box>
        <Text color="cyan">{skip} skip</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    <Text>
      {todo + pass + skip + fail} of {total} completed
    </Text>
  </Box>
)
