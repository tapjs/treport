const t = require('tap')
const pretty = require('./pretty-diff.js')

t.equal(pretty(), null)

const diff = `--- expected
+++ actual
@@ fragment without context @@
@@ -1500,10 +1500,7 @@ Object {
     499,
   ],
   "500x": Array [
-    1000,
+    500,
-    501,
-    502,
-    503,
   ],
   "501x": Array [
     501,
@@ -3002,8 +2999,4 @@ Object {
   "999x": Array [
     999,
   ],
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
 }
`

process.stdout.columns = 40
t.matchSnapshot(pretty(diff), 'a pretty diff at 40 columns')

process.stdout.columns = 2
t.matchSnapshot(pretty(diff), 'a pretty diff at 2 columns')

process.stdout.columns = 0
t.matchSnapshot(pretty(diff), 'a pretty diff at 0 columns')

process.stdout.columns = 40
require('chalk').supportsColor.level = 1
t.matchSnapshot(pretty(diff), 'a pretty diff without ansi support')
