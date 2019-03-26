const React = require('react')
const importJSX = require('import-jsx')
const {render} = require('ink-testing-library')
const t = require('tap')
const AssertCounts = importJSX('./assert-counts.js')

const cases = [
  [0, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [0, 1, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [1, 0, 1, 1],
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 1],
]

let r
cases.forEach(c => {
  const [fail, pass, todo, skip] = c
  const tag = <AssertCounts {...{fail, pass, todo, skip}} />
  if (!r)
    r = render(tag)
  else
    r.rerender(tag)
  t.matchSnapshot(r.lastFrame(), JSON.stringify({fail, pass, todo, skip}))
})
