const React = require('react')
const {Box, Text} = require('ink')

module.exports = ({fail, pass, todo, skip}) => (
  <Box>
    <Box width={10}>
      <Text bold>Asserts:</Text>
    </Box>
    {!fail && !pass && !todo && !skip ? <Text>{'0 '}</Text> : undefined}
    {fail ? (
      <Box>
        <Text color="red">{fail} failed</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    {pass ? (
      <Box>
        <Text color="green">{pass} passed</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    {todo ? (
      <Box>
        <Text color="magenta">{todo} todo</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    {skip ? (
      <Box>
        <Text color="cyan">{skip} skip</Text>
        <Text>{', '}</Text>
      </Box>
    ) : undefined}
    <Text>
      of {pass + fail + todo + skip}
    </Text>
  </Box>
)
