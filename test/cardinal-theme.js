const t = require('tap')
// tell chalk to be colorful
process.argv.push('--color')
const theme = require('../lib/cardinal-theme.js')
t.match(theme, { Boolean: { _default: Function }})

const c = require('chalk')
const key = theme.String._default('key', {
  tokens: ['key', {
    type: 'Punctuator',
    value: ':',
  }],
  tokenIndex: 0,
})
t.equal(key, c.green('key'), 'keys are green')
const str = theme.String._default('str', {
  tokens: ['str'],
  tokenIndex: 0,
})
t.equal(str, c.greenBright('str'), 'strings are bright')

t.equal(theme.Boolean._default('true'), c.redBright('true'), 'red as boold')

/*
_default: function(s, info) {
  var nextToken = info.tokens[info.tokenIndex + 1]

  // show keys of object literals and json in different color
  return (nextToken && nextToken.type === 'Punctuator' && nextToken.value === ':')
    ? green(s)
    : greenBright(s)
}
*/
