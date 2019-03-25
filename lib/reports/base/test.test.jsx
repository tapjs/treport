require('../../term-setup.test.js')
const importJSX = require('import-jsx')
const React = require('react')
const TestTag = importJSX('./test.js')
const t = require('tap')
const {Test} = t
const {render} = require('ink-testing-library')

const cases = {
  'basic': t => {
    t.pass('this is fine')
    t.end()
  },
  'not started': t => {},
  'pending': t => {
    t.pass('this is fine')
  },
  'skip, todo, fail': t => {
    t.pass('pass')
    t.fail('fail')
    t.skip('skip')
    t.fail('skip this tho', { skip: 'reasons' })
    t.todo('todo')
    t.fail('todo this tho', { todo: 'reasons' })
    t.end()
  },
  'test skip': t => {
    t.options.skip = true
    t.end()
  },
  'test skip reason': t => {
    t.options.skip = 'reason'
    t.end()
  },
  'test todo': t => {
    t.options.todo = true
    t.end()
  },
  'test todo reason': t => {
    t.options.todo = 'reason'
    t.end()
  },
  'weird fail': t => {
    t.options.command = 'command'
    t.options.args = ['a','r','g','s']
    t.options.exitCode = 99
    t.options.signal = 'grinning octupus'
    t.pass('this is fine')
    t.end()
    t.results.ok = false
  },
  'bailout': t => t.bailout(),
  'bailout reason': t => t.bailout('reason'),
}

const now = Date.now()
Date.now = () => 1234

let r = null
for (const c in cases) {
  const fn = cases[c]
  const tt = new Test({name: c})
  tt.startTime = 0
  tt.endTime = 0
  if (c !== 'not started')
    tt.startTime = Date.now() - 123
  fn(tt)
  if (tt.startTime && c !== 'pending')
    tt.endTime = Date.now()
  const tag = <TestTag test={tt} />
  if (!r)
    r = render(tag)
  else
    r.rerender(tag)
  t.matchSnapshot(r.lastFrame(), c)
}
t.end()
