const React = require('react')
const {Box, Text} = require('ink')
const prettyDiff = require('../../pretty-diff.js')
const prettySource = require('../../pretty-source.js')
const yaml = require('tap-yaml')
const importJSX = require('import-jsx')
const PassFail = importJSX('./pass-fail.js')
const AssertName = importJSX('./assert-name.js')

module.exports = ({res}) => {
  const {ok, id, name, testName, skip, todo} = res
  const diag = res.diag || {}
  const diff = prettyDiff(diag && diag.diff)
  if (diff) {
    delete diag.diff
    delete diag.found
    delete diag.wanted
    delete diag.pattern
    delete diag.compare
  }
  const source = prettySource(diag)
  if (source)
    delete diag.source

  // pretty-print errors found in t.error() assertions
  const origin = diag && diag.found && diag.origin
  const originSrc = prettySource(origin)
  if (originSrc) {
    origin.message = diag.found.message
    delete diag.origin
    delete diag.found
    delete origin.source
  }

  delete diag.didNotWant

  return (
    <Box flexDirection="column">
      <PassFail ok={ok} name={testName} skip={skip} todo={todo} />
      <AssertName {...{ok, name, skip, todo}} />
      <Text>{' '}</Text>
      { source ? (<Text>{source}</Text>) : undefined }
      { diff ? (<Text>{ diff + '\n'}</Text>) : undefined }
      { diag && Object.keys(diag).length ? (
        <Text>
          {`  ${
            yaml.stringify({
              test: res.fullname,
              ...diag,
            }).split('\n').join('\n  ')
          }`}
        </Text>
      ) : undefined }
      { originSrc ? (
        <Box flexDirection="column">
          <Box marginLeft={2}><Text>Error Origin:{'\n'}</Text></Box>
          <Text>{originSrc}</Text>
          <Box marginLeft={2}><Text>{yaml.stringify(origin)}</Text></Box>
        </Box>
      ) : undefined }
    </Box>
  )
}
