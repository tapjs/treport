const t = require('tap')
const {Test} = t
const ParserAsserts = require('../lib/parser-asserts.js')
const Parser = require('tap-parser')
const etoa = require('events-to-array')

const clean = events => events.map(event =>
  event[1] ? [
    event[0], {
      ...event[1],
      time: null,
      diag: event[1].diag && {
        ...event[1].diag,
        stack: null,
        at: event[1].diag.at && {},
      }
    }] : event)

t.test('a stream of parser-asserts', t => {
  const test = new Test()
  test.name = 'hi there'
  const p = new Parser()
  test.pipe(p)
  const pa = new ParserAsserts(p)
  const events = etoa(pa)
  test.on('end', () => {
    t.matchSnapshot(clean(events), 'got expected events')
    t.end()
  })

  p.resume()
  test.pass('this is fine')
  test.test('child test', tt => {
    tt.fail('not so fine')
    tt.ok(false, { todo: 'will do later' })
    tt.ok(false, { skip: 'skip this' })
    tt.end()
  })

  test.test('lying child', tt => {
    test.parser.write('    not ok - lying\n')
    test.parser.write('    ok\n')
    tt.pass('this is fine')
    tt.end()
  })

  test.test('todo test')
  test.test('skip test', { skip: true }, tt => tt.end())
  test.end()
})
