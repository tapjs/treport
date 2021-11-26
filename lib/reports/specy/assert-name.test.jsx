const React = require('react')
const importJSX = require('@isaacs/import-jsx')
const t = require('tap')
const AssertName = importJSX('./assert-name.js')
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

const r = render(<AssertName {...cases[0]} />)
t.matchSnapshot(r.lastFrame(), JSON.stringify(cases[0]))
for (let i = 1; i < cases.length; i++) {
  r.rerender(<AssertName {...cases[i]} />)
  t.matchSnapshot(r.lastFrame(), JSON.stringify(cases[i]))
}

r.unmount()
