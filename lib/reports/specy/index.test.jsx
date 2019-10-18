let tickCount = 1
const tick = () => tickCount += 1
Date.now = () => 1000 * tickCount
process.hrtime = (hr) => !hr ? [tickCount, 0] : [tickCount - hr[0], 0]
const importJSX = require('import-jsx')
const React = require('react')
const Report = importJSX('./index.js')
const t = require('tap')
const {Test} = t
const {render, cleanup} = require('ink-testing-library')

t.test('mostly good test run', async t => {
  const tap = new Test({ name: 'TAP', jobs: 4, bail: false })
  const r = render(<Report tap={tap} />)
  t.matchSnapshot(r.lastFrame())

  const tests = []
  tap.test('zro', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('one', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('two', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('tre', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('for', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('fiv', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('six', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('svn', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('eit', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('nin', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())
  tap.test('ten', t => tests.push(t))
  t.matchSnapshot(r.lastFrame())

  t.matchSnapshot(tests.map(t => t.name), 'current tests')

  tests[0].fail('this is a failure')
  tests[1].pass('give this one a pass')
  tests[2].pass('give this two a pass')
  tests[3].pass('give this tre a pass')
  t.matchSnapshot(r.lastFrame())

  // bump the time by a second
  tick()

  tests[0].end()
  t.matchSnapshot(r.lastFrame())

  t.matchSnapshot(tests.map(t => t.name), 'current tests')

  tests[1].pass('give this one a pass')
  tests[2].pass('give this two a pass')
  tests[3].pass('give this tre a pass')

  tests[1].pass('give this one a pass')
  tests[2].pass('give this two a pass')
  tests[3].pass('give this tre a pass')

  // bump the time by a second
  tick()
  t.matchSnapshot(r.lastFrame())

  tests.forEach(t => t.results || t.pass('this is fine'))
  tests[2].end()
  t.matchSnapshot(r.lastFrame())
  t.matchSnapshot(tests.map(t => t.name), 'current tests')
  tests[1].end()
  t.matchSnapshot(r.lastFrame())
  t.matchSnapshot(tests.map(t => t.name), 'current tests')

  const opt = {}
  tests[4].emit('preprocess', opt)
  t.match(opt, { stdio: 'pipe' })

  const Minipass = require('minipass')
  const stderr = new Minipass()
  tests[4].emit('process', {stderr})
  stderr.write('this is some raw 2> stuff')
  t.matchSnapshot(r.lastFrame())

  tests[3].fail('do this later', { todo: 'at another time' })
  tests[4].options.skip = 'skip this whole thing for now'
  tests[4].end()
  t.matchSnapshot(r.lastFrame())
  t.matchSnapshot(tests.map(t => t.name), 'current tests')

  tests[5].parser.write('this is definitely not tap\n')
  tests[5].fail('hop over it', { skip: true })
  tests[5].test('no function, just a todo')
  t.matchSnapshot(r.lastFrame())

  tests.forEach(t => t.results || t.pass('this is fine'))
  tests.forEach(t => t.results || t.pass('still ok'))
  tests.forEach(t => t.results || t.end())

  tests[8].fail('fail but will be todo somehow')
  tests[8].options.todo = true
  tests[8].end()

  tests[9].pass('this is fine')
  tests[9].options.todo = true

  t.matchSnapshot(r.lastFrame())
  t.matchSnapshot(tests.map(t => t.name), 'current tests')

  tap.end()

  tests.forEach(t => t.results || t.pass('this is fine'))
  tests.forEach(t => t.results || t.end())

  t.matchSnapshot(r.lastFrame())

  t.end()
  cleanup()
})

t.test('bailout run', async t => {
  const tap = new Test({ jobs: 4, name: 'TAP bailer', bail: true })

  const r = render(<Report tap={tap} />)
  t.matchSnapshot(r.lastFrame())

  const tests = []
  tap.test('zro', { bail: true }, t => tests.push(t))
  tap.test('one', { bail: true }, t => tests.push(t))
  tap.test('two', { bail: true }, t => tests.push(t))
  tap.test('tre', { bail: true }, t => tests.push(t))
  tap.test('for', { bail: true }, t => tests.push(t))
  tap.test('fiv', { bail: true }, t => tests.push(t))

  tests.forEach(t => t.results || t.pass('this is fine'))
  // let the counter bouncer bounce
  await new Promise(r => setTimeout(r, 200))

  // bump the time by a second
  tick()
  t.matchSnapshot(r.lastFrame())
  tests.forEach(t => t.results || t.pass('this is fine'))
  await new Promise(r => setTimeout(r, 200))
  tests[2].end()
  tests[3].end()
  t.matchSnapshot(r.lastFrame())

  tests[0].end()
  tests.forEach(t => t.results || t.pass('this is fine'))
  await new Promise(r => setTimeout(r, 200))

  tests[1].fail('not fine')
  tests[4].fail('ton enif')
  tests[4].end()

  // subsequent bailout does nothing
  tap.emit('bailout', 'this should not be shown')

  t.matchSnapshot(r.lastFrame())

  t.end()
  cleanup()
})

t.test('weird root bailout', async t => {
  const tap = new Test({ jobs: 4, name: 'TAP bailer' })

  const r = render(<Report tap={tap} />)
  t.matchSnapshot(r.lastFrame())

  const tests = []
  tap.test('zro', { bail: false }, t => tests.push(t))
  tap.test('one', { bail: false }, t => tests.push(t))
  tap.test('two', { bail: false }, t => tests.push(t))
  tap.test('tre', { bail: false }, t => tests.push(t))
  tap.test('for', { bail: false }, t => tests.push(t))
  tap.test('fiv', { bail: false }, t => tests.push(t))
  tap.test('six', { bail: false }, t => tests.push(t))
  tap.test('svn', { bail: false }, t => tests.push(t))
  tap.test('eit', { bail: false }, t => tests.push(t))
  tap.test('nin', { bail: false }, t => tests.push(t))

  tests.forEach(t => t.results || t.pass('this is fine'))
  // let the counter bouncer bounce
  await new Promise(r => setTimeout(r, 200))

  // bump the time by a second
  tick()
  t.matchSnapshot(r.lastFrame())
  tests.forEach(t => t.results || t.pass('this is fine'))
  await new Promise(r => setTimeout(r, 200))
  tests[2].end()
  tests[3].end()
  t.matchSnapshot(r.lastFrame())

  tests[0].end()
  tests.forEach(t => t.results || t.pass('this is fine'))
  await new Promise(r => setTimeout(r, 200))

  tests[1].fail('not fine')
  tap.bailout('not fine')
  tests[4].fail('ton enif')
  tests[4].end()

  // subsequent bailout does nothing
  tap.emit('bailout', 'this should not be shown')

  t.matchSnapshot(r.lastFrame())

  t.end()
  cleanup()
})

t.test('one at a time', async t => {
  const tap = new Test({ jobs: 1 })

  const r = render(<Report tap={tap} />)
  t.matchSnapshot(r.lastFrame())

  const tests = []
  tap.test('zro', { buffered: false }, t => tests.push(t))
  tap.test('one', { buffered: false }, t => tests.push(t))
  tap.test('two', { buffered: false }, t => tests.push(t))
  tap.test('tre', { buffered: false }, t => tests.push(t))
  tap.test('for', { buffered: false }, t => tests.push(t))
  tap.test('fiv', { buffered: false }, t => tests.push(t))
  tap.end()

  for (let i = 1; !tap.results; i++) {
    // bump the time by a second
    tick()
    tests.forEach(t => t.results || t.pass('pass '+i))
    await new Promise(r => setTimeout(r, 200))
    t.matchSnapshot(r.lastFrame())
    // bump the time by a second
    tick()
    tests.forEach(t => t.results || t.end())
    t.matchSnapshot(r.lastFrame())
  }

  t.end()
  cleanup()
})
