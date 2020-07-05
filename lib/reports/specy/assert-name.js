const React = require('react')
const {Box, Text} = require('ink')

const glyphColor = ({ ok, skip, todo }) =>
  skip ? 'cyan'
  : todo ? 'magenta'
  : !ok ? 'red'
  : 'green'

const glyphText = ({ ok, skip, todo }) =>
  skip ? '~ '
  : todo ? '☐ '
  : !ok ? '✖ '
  : '✓ '

const Glyph = ({ ok, skip, todo }) => (
  <Box width={2}>
    <Text bold color={glyphColor({ok, skip, todo})}>
      {glyphText({ok, skip, todo})}
    </Text>
  </Box>
)

const Reason = ({skip, todo}) =>
  skip && skip !== true ? (
    <Box>
      <Text>{' > '}</Text>
      <Text color={glyphColor({skip, todo})}>{skip}</Text>
    </Box>
  )
  : todo && todo !== true ? (
    <Box>
      <Text>{' > '}</Text>
      <Text color={glyphColor({skip, todo})}>{todo}</Text>
    </Box>
  )
  : null

const AssertName = ({ ok, name, skip, todo }) => (
  <Box>
    <Glyph {...{ok, skip, todo}} />
    <Text>{name || '(unnamed assertion)'}</Text>
    <Reason {...{skip, todo}} />
  </Box>
)

module.exports = AssertName
