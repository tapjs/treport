const React = require('react')
const {Box, Color} = require('ink')
const prettyDiff = require('../../pretty-diff.js')
const prettySource = require('../../pretty-source.js')
const yaml = require('tap-yaml')
const importJSX = require('import-jsx')
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

  delete diag.didNotWant

  return (
    <Box flexDirection="row">
      <Box width={(res.level || 0) * 2}></Box>
      <Box flexDirection="column">
        <AssertName {...{ok, name, skip, todo}} />
        {ok ? '' :
          (<Box flexDirection="column">
            {' '}
            { source ? (<Box>{source}</Box>) : '' }
            { diff ? (<Box>{ diff + '\n'}</Box>) : '' }
            { diag && Object.keys(diag).length ? (
              <Box>
                {
                  yaml.stringify(diag).split('\n').join('\n  ')
                }
              </Box>
            ) : '' }
          </Box>)
        }
      </Box>
    </Box>
  )
}
