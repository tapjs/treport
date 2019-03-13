const React = require('react')
const t = require('tap')
const importJSX = require('import-jsx')
const TestPoint = importJSX('../lib/test-point.js')
const {render} = require('ink-testing-library')

const clean = str => str
  .replace(/^  stack: \|(\n    .*)+/gm, '  {stack}')

const r = render(<div />)

const test = new t.Test()
test.name = 'some name'
test.parser.on('assert', res => {
  res.testName = test.name
  r.rerender(<TestPoint res={res} />)
  t.matchSnapshot(clean(r.lastFrame()), res.name)
})

test.pass('this is fine')
test.fail('not so fine')
test.match({a: 1}, {a: Function}, 'no match')
test.test('test without fn is a todo')
test.test('todo test with named reason', { todo: 'i have my reasons' })
test.equal(1, 2)
test.same({a: 1}, {b: 2})
test.fail('magma', { skip: 'hop over the lava' })
test.fail('rope', { skip: true })
test.resume()
