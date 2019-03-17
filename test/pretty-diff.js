const t = require('tap')
const pretty = require('../lib/pretty-diff.js')

t.equal(pretty(), null)

const diff = `--- expected
+++ actual
 Object {
+  "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a": 1,
-  "b": 2,
 }
`

process.stdout.columns = 40
t.matchSnapshot(pretty(diff), 'a pretty diff at 40 columns')

process.stdout.columns = 2
t.matchSnapshot(pretty(diff), 'a pretty diff at 2 columns')

process.stdout.columns = 0
t.matchSnapshot(pretty(diff), 'a pretty diff at 0 columns')
