const t = require('tap')
const theme = require('./cardinal-theme.js')
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
