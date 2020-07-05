const React = require('react')
const {Box, Text} = require('ink')
const importJSX = require('import-jsx')
const StatusMark = importJSX('./status-mark.js')


module.exports = ({ok, name, skip, todo}) => (
  !name ? null
  : (<Box><StatusMark res={{ok, name, skip, todo}} /><Text>{' ' + name}</Text></Box>)
)
