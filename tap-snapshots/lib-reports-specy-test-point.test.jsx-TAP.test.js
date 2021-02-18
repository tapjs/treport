/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`lib/reports/specy/test-point.test.jsx TAP > magma 1`] = `
[36m[1m~ [39m[22mmagma > [36mhop over the lava[39m

`

exports[`lib/reports/specy/test-point.test.jsx TAP > no match 1`] = `
[31m[1m✖ [39m[22mno match

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/specy/test-point.test.jsx[39m                                 [49m
[48;2;34;34;34m [38;2;119;119;119m 25 | [39m[36mconst[39m [38;2;238;238;238ms[39m [93m=[39m [38;2;238;238;238mer[39m[32m.[39m[38;2;238;238;238mstack[39m [32m// trigger the getter[39m                         [49m
[48;2;34;34;34m [38;2;119;119;119m 26 | [39m[32m// polyfill until tap publishes the origin-tracking feature[39m      [49m
[48;2;34;34;34m[31m[1m>[22m[39m 27[38;2;119;119;119m | [39m[36mconst[39m [38;2;238;238;238mcleanYamlObject[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/clean-yaml-object.js'[39m[93m)[39m  [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                           [49m
[48;2;34;34;34m [38;2;119;119;119m 28 | [39m[36mconst[39m [38;2;238;238;238mextraFromError[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/extra-from-error.js'[39m[93m)[39m    [49m
[48;2;34;34;34m [38;2;119;119;119m 29 | [39m[36mconst[39m [38;2;238;238;238mextra[39m [93m=[39m [33m{[39m [38;2;238;238;238morigin[39m[93m:[39m [38;2;238;238;238mcleanYamlObject[39m[93m([39m[38;2;238;238;238mextraFromError[39m[93m([39m[38;2;238;238;238mer[39m[93m)[39m[93m)[39m [33m}[39m    [49m
[48;2;34;34;34m [38;2;119;119;119m 30 | [39m[38;2;238;238;238mtest[39m[32m.[39m[91merror[39m[93m([39m[38;2;238;238;238mer[39m[32m,[39m [92m'to er is to fail this assertion'[39m[32m,[39m [38;2;238;238;238mextra[39m[93m)[39m         [49m

  [38;2;51;0;0m[48;2;255;153;204m--- expected                 [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual                   [49m[39m
  [1m[48;2;255;255;255m[38;2;204;0;255m@@ -1,3 +1,3 @@[39m[49m[22m[48;2;255;255;255m[38;2;51;102;204m[1m              [22m[39m[49m
  [48;2;255;255;255m[38;2;17;17;17m Object {                    [39m[49m
  [38;2;51;0;0m[48;2;255;153;204m-  "a": Function Function(), [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+  "a": 1,                   [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }                           [39m[49m

  stack: "{stack}"

`

exports[`lib/reports/specy/test-point.test.jsx TAP > not so fine 1`] = `
[31m[1m✖ [39m[22mnot so fine

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/specy/test-point.test.jsx[39m                                 [49m
[48;2;34;34;34m [38;2;119;119;119m 24 | [39m[36mconst[39m [38;2;238;238;238mer[39m [93m=[39m [31mnew[39m [38;2;238;238;238mError[39m[93m([39m[92m'this is an error'[39m[93m)[39m                         [49m
[48;2;34;34;34m [38;2;119;119;119m 25 | [39m[36mconst[39m [38;2;238;238;238ms[39m [93m=[39m [38;2;238;238;238mer[39m[32m.[39m[38;2;238;238;238mstack[39m [32m// trigger the getter[39m                         [49m
[48;2;34;34;34m[31m[1m>[22m[39m 26[38;2;119;119;119m | [39m[32m// polyfill until tap publishes the origin-tracking feature[39m      [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                           [49m
[48;2;34;34;34m [38;2;119;119;119m 27 | [39m[36mconst[39m [38;2;238;238;238mcleanYamlObject[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/clean-yaml-object.js'[39m[93m)[39m  [49m
[48;2;34;34;34m [38;2;119;119;119m 28 | [39m[36mconst[39m [38;2;238;238;238mextraFromError[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/extra-from-error.js'[39m[93m)[39m    [49m
[48;2;34;34;34m [38;2;119;119;119m 29 | [39m[36mconst[39m [38;2;238;238;238mextra[39m [93m=[39m [33m{[39m [38;2;238;238;238morigin[39m[93m:[39m [38;2;238;238;238mcleanYamlObject[39m[93m([39m[38;2;238;238;238mextraFromError[39m[93m([39m[38;2;238;238;238mer[39m[93m)[39m[93m)[39m [33m}[39m    [49m

  stack: "{stack}"

`

exports[`lib/reports/specy/test-point.test.jsx TAP > should be equal 1`] = `
[31m[1m✖ [39m[22mshould be equal

  [38;2;51;0;0m[48;2;255;153;204m--- expected    [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual      [49m[39m
  [1m[48;2;255;255;255m[38;2;204;0;255m@@ -1,1 +1,1 @@[39m[49m[22m[48;2;255;255;255m[38;2;51;102;204m[1m [22m[39m[49m
  [38;2;51;0;0m[48;2;255;153;204m-2              [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+1              [49m[39m

  at:
    line: 48
    column: 6
    file: lib/reports/specy/test-point.test.jsx
  stack: "{stack}"

`

exports[`lib/reports/specy/test-point.test.jsx TAP > should be equivalent 1`] = `
[31m[1m✖ [39m[22mshould be equivalent

  [38;2;51;0;0m[48;2;255;153;204m--- expected    [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual      [49m[39m
  [1m[48;2;255;255;255m[38;2;204;0;255m@@ -1,3 +1,3 @@[39m[49m[22m[48;2;255;255;255m[38;2;51;102;204m[1m [22m[39m[49m
  [48;2;255;255;255m[38;2;17;17;17m Object {       [39m[49m
  [38;2;51;0;0m[48;2;255;153;204m-  "b": 2,      [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+  "a": 1,      [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }              [39m[49m

  at:
    line: 49
    column: 6
    file: lib/reports/specy/test-point.test.jsx
  stack: "{stack}"

`

exports[`lib/reports/specy/test-point.test.jsx TAP > test without fn is a todo 1`] = `
[35m[1m☐ [39m[22mtest without fn is a todo
`

exports[`lib/reports/specy/test-point.test.jsx TAP > this is fine 1`] = `
[32m[1m✓ [39m[22mthis is fine
`

exports[`lib/reports/specy/test-point.test.jsx TAP > to er is to fail this assertion 1`] = `
[31m[1m✖ [39m[22mto er is to fail this assertion

  at:
    line: 47
    column: 6
    file: lib/reports/specy/test-point.test.jsx
  stack: "{stack}"

  Error Origin:

test.resume()

  at:
    line: 36
    column: 12
    file: lib/reports/specy/test-point.test.jsx
    function: Object.<anonymous>
  stack: |
    Object.<anonymous> (lib/reports/specy/test-point.test.jsx:36:12)
    Module.replacementCompile (node_modules/append-transform/index.js:58:13)
    module.exports (node_modules/default-require-extensions/js.js:7:9)
    node_modules/append-transform/index.js:62:4
    Object.<anonymous> (node_modules/append-transform/index.js:62:4)
  message: this is an error

`

exports[`lib/reports/specy/test-point.test.jsx TAP > todo test with named reason 1`] = `
[35m[1m☐ [39m[22mtodo test with named reason > [35mi have my reasons[39m
`
