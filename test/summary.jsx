const importJSX = require('import-jsx')
const React = require('react')
const Summary = importJSX('../lib/summary.js')
const t = require('tap')
const {Test} = t
const {render} = require('ink-testing-library')

const r = render(<Summary
  results={null}
  counts={{
    pass: 0,
    total: 0,
    fail: 0,
    skip: 0,
    todo: 0,
  }}
  lists={{
    pass: [],
    fail: [],
    skip: [],
    todo: [],
    tests: [],
  }}
  time={123}
  bailout={false} />)

t.matchSnapshot(r.lastFrame(), 'initial state')

const tt = new Test({
  bail: false,
  name: 'TAP',
  jobs: 99,
})

let fail
tt.test('failer', t => {
  fail = t
})
t.isa(fail, Test, 'created fail test')

let todo
tt.test('todo', t => {
  todo = t
})
t.isa(todo, Test, 'created todo test')

let skip
tt.test('skip', t => {
  skip = t
})
t.isa(skip, Test, 'created skip test')

let pass
tt.test('pass', t => {
  pass = t
})
t.isa(pass, Test, 'created pass test')

const tests = [fail, pass, skip, todo]


r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [],
    fail: [],
    skip: [],
    todo: [],
    tests,
  }}
  time={123}
  bailout={false} />)
t.matchSnapshot(r.lastFrame(), 'tests added')

fail.fail('failer gonna fail')
fail.end()

r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [],
    fail: [fail],
    skip: [],
    todo: [],
    tests,
  }}
  time={123}
  bailout={false} />)
t.matchSnapshot(r.lastFrame(), 'failer failed')

todo.options.todo = 'to do or not to do that is the question'
todo.end()

r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [],
    fail: [fail],
    skip: [],
    todo: [todo],
    tests,
  }}
  time={123}
  bailout={false} />)
t.matchSnapshot(r.lastFrame(), 'todo todoed')

skip.options.skip = 'to move by hopping on alternate feet'
skip.end()

r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [],
    fail: [fail],
    skip: [skip],
    todo: [todo],
    tests,
  }}
  time={123}
  bailout={false} />)
t.matchSnapshot(r.lastFrame(), 'skip skipped')

pass.pass('this is fine')
pass.end()

r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [pass],
    fail: [fail],
    skip: [skip],
    todo: [todo],
    tests,
  }}
  time={123}
  bailout={false} />)
t.matchSnapshot(r.lastFrame(), 'pass past')

tt.end()

r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [pass],
    fail: [fail],
    skip: [skip],
    todo: [todo],
    tests,
  }}
  time={123}
  bailout={false} />)
t.matchSnapshot(r.lastFrame(), 'parent ended')

fail.results.bailout = 'failer gonna fail'
r.rerender(<Summary
  results={tt.results}
  counts={tt.counts}
  lists={{
    pass: [pass],
    fail: [fail],
    skip: [skip],
    todo: [todo],
    tests,
  }}
  time={123}
  bailout="failer gonna fail" />)
t.matchSnapshot(r.lastFrame(), 'parent ended but it was a bailout')
