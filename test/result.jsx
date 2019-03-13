const React = require('react')
const t = require('tap')
const importJSX = require('import-jsx')
const Result = importJSX('../lib/result.js')
const {render} = require('ink-testing-library')

const r = render(<Result raw="hello" />)
t.matchSnapshot(r.lastFrame(), 'raw string')

r.rerender(<Result res={{ok: true, name: 'hi'}} />)
t.matchSnapshot(r.lastFrame(), 'result')

r.rerender(<Result test={{
  options: {},
  lists: {
    fail: [],
    todo: [],
    skip: [],
    pass: [],
  },
  counts: {
    pass: 1,
    total: 1,
    fail: 0,
    skip: 0,
    todo: 0,
  },
}} />)
t.matchSnapshot(r.lastFrame(), 'test')

r.unmount()
