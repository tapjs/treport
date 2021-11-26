// for some reason all the jsx and whatnot makes this error get
// its effective origin all screwed up.  something something source maps.
// put it at the top of the file so we at least cover the code that
// attempts to get the source of the error, which normally does work.
const er = new Error('this is an error')

const React = require('react')
const t = require('tap')
const importJSX = require('@isaacs/import-jsx')
const TestPoint = importJSX('./test-point.js')
const {render} = require('ink-testing-library')

const r = render(<div />)

process.env.TAP_BAIL = '0'
const test = new t.Test()
test.name = 'some name'
test.parser.on('assert', res => {
  res.testName = test.name
  res.diag && res.diag.stack && (res.diag.stack = '{stack}')
  r.rerender(<TestPoint res={res} />)
  t.matchSnapshot(r.lastFrame(), res.name)
})

test.resume()

test.pass('this is fine')
test.fail('not so fine')
test.match({a: 1}, {a: Function}, 'no match')
test.test('test without fn is a todo')
test.test('todo test with named reason', { todo: 'i have my reasons' })
test.equal(1, 2)
test.same({a: 1}, {b: 2})
test.fail('magma', { skip: 'hop over the lava' })
test.fail('rope', { skip: true })

test.test('only filtered child test', { skip: 'filter: only' }, t => t.end())
test.test('grep filtered child test', { skip: 'filter: /foo/' }, t => t.end())

test.error(er, 'to er is to fail this assertion')
test.end()
