require('../../term-setup.test.js')
const React = require('react')
const importJSX = require('import-jsx')
const {render} = require('ink-testing-library')
const t = require('tap')
const SuiteCounts = importJSX('./suite-counts.js')

const cases = [
  [0, 0, 0, 0, 4],
  [0, 0, 0, 1, 4],
  [0, 0, 1, 0, 4],
  [0, 0, 1, 1, 4],
  [0, 1, 0, 0, 4],
  [0, 1, 0, 1, 4],
  [0, 1, 1, 0, 4],
  [0, 1, 1, 1, 4],
  [1, 0, 0, 0, 4],
  [1, 0, 0, 1, 4],
  [1, 0, 1, 0, 4],
  [1, 0, 1, 1, 4],
  [1, 1, 0, 0, 4],
  [1, 1, 0, 1, 4],
  [1, 1, 1, 0, 4],
  [1, 1, 1, 1, 4],
]

let r
cases.forEach(c => {
  const [fail, pass, todo, skip, total] = c
  const obj = {fail, pass, todo, skip, total}
  const tag = <SuiteCounts {...obj} />
  if (!r)
    r = render(tag)
  else
    r.rerender(tag)
  t.matchSnapshot(r.lastFrame(), JSON.stringify(obj))
})
