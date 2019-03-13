// tell chalk to do colors
process.argv.push('--color')
const React = require('react')
const importJSX = require('import-jsx')
const t = require('tap')
const AssertName = importJSX('../lib/assert-name.js')
const {render} = require('ink-testing-library')

const ok = [ true, false ]
const skip = [false, true, 'skip reason']
const todo = [false, true, 'todo reason']
const name = ['name', undefined]
const cases = []

ok.forEach(ok =>
  skip.forEach(skip =>
    todo.forEach(todo =>
      name.forEach(name => cases.push({ok, skip, todo, name})))))

let r
for (let i = 0; i < cases.length; i++) {
  if (r)
    r.rerender(<AssertName {...cases[i]} />)
  else
    r = render(<AssertName {...cases[i]} />)
  t.matchSnapshot(r.lastFrame(), JSON.stringify(cases[i]))
}
r.unmount()
