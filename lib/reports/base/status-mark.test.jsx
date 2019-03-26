const React = require('react')
const t = require('tap')
const importJSX = require('import-jsx')
const StatusMark = importJSX('./status-mark.js')
const {render} = require('ink-testing-library')

const r = render(<StatusMark />)

t.test('results', t => {
  const results = {
    pass: { ok: true },
    fail: { ok: false },
    skip: { skip: true },
    todo: { todo: true },
  }
  for (const [name, res] of Object.entries(results)) {
    r.rerender(<StatusMark res={res} />)
    t.matchSnapshot(r.lastFrame(), name)
  }
  t.end()
})

t.test('tests', t => {
  const _ = opt => ({
    results: { ok: true },
    counts: {},
    options: {},
    ...opt,
  })

  const tests = {
    pass: _({}),
    pending: _({ results: null }),
    fail: _({ results: { ok: false } }),
    skip: _({ options: { skip: true } }),
    todo: _({ options: { todo: true } }),
    skipCount: _({ counts: { todo: 1, skip: 2 } }),
    todoCount: _({ counts: { todo: 1 } }),
  }
  for (const [name, test] of Object.entries(tests)) {
    r.rerender(<StatusMark test={test} />)
    t.matchSnapshot(r.lastFrame(), name)
  }
  t.end()
})

r.unmount()
