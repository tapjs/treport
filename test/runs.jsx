const importJSX = require('import-jsx')
const React = require('react')
const Runs = importJSX('../lib/runs.js')
const t = require('tap')
const {Test} = t
const {render} = require('ink-testing-library')

const now = Date.now()
Date.now = () => 1234

const foo = new Test({name: 'foo', bail: false})
foo.startTime = Date.now() - 420
foo.pass('this is fine')

const bar = new Test({name: 'bar', bail: false})

const r = render(<Runs runs={[foo, bar]} />)
t.matchSnapshot(r.lastFrame())
