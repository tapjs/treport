const React = require('react')
const {Box, Text} = require('ink')

const pending = () => (<Text color='#000' backgroundColor='yellow' bold>{' RUNS '}</Text>)
const fail = () => (<Text color='#fff' backgroundColor='red' bold>{' FAIL '}</Text>)
const skip = () => (<Text color='rgb(255, 255, 255)' backgroundColor='blue' bold>{' SKIP '}</Text>)
const todo = () => (<Text color='rgb(255, 255, 255)' backgroundColor='rgb(127, 0, 127)' bold>{' TODO '}</Text>)
const pass = () => (<Text color='rgb(0, 0, 0)' backgroundColor='green' bold>{' PASS '}</Text>)

module.exports = ({test, res}) =>
  test ? (
    !test.results ? pending()
    : !test.results.ok ? fail()
    : test.options.skip || test.counts.skip > test.counts.todo ? skip()
    : test.options.todo || test.counts.todo ? todo()
    : pass()
  ) : res ? (
    res.skip ? skip()
    : res.todo ? todo()
    : !res.ok ? fail()
    : pass()
  ) : null
