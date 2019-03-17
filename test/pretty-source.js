const pretty = require('../lib/pretty-source.js')
const t = require('tap')
const fs = require('fs')
const path = require('path')

t.test('basic null responses', t => {
  t.equal(pretty(), null, 'no diag')
  t.equal(pretty({}), null, 'no source')
  t.equal(pretty({source:{}}), null, 'source not string')
  t.equal(pretty({source:'foo'}), 'foo', 'no at')
  t.equal(pretty({source:'foo',at:{}}), 'foo', 'no line')
  t.equal(pretty({source:'foo',at:{line:1}}), 'foo', 'no file')
  t.equal(pretty({source:'foo',at:{file:'does not exist',line:99,column:18}}),
    'foo', 'nonexistent file')
  t.end()
})

t.test('highlight a file', t => {
  const file = path.resolve(__dirname, '../delete-me.js')
  t.teardown(() => fs.unlinkSync(file))
  fs.writeFileSync(file, `const line0 = 'line 0'
const line1 = 'line 1'
const line2 = 'line 2'
const line3 = 'line 3'
const line4 = 'line 4'
const line5 = 'line 5'
const line6 = 'line 6'
const line7 = 'line 7'
const line8 = 'line 8'
const line9 = 'line 9'
`)
  t.matchSnapshot(pretty({
    source:'this does not matter',
    at: {
      file,
      line: 4,
      column: 5,
    }
  }), 'with the caret')
  t.matchSnapshot(pretty({
    source:'this does not matter',
    at: {
      file,
      line: 4,
    }
  }), 'no caret')
  t.matchSnapshot(pretty({
    source:'this does not matter',
    at: {
      file,
      line: 10,
    }
  }), 'last line')
  t.end()
})
