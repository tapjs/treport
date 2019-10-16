/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`lib/reports/base/test-point.test.jsx TAP > magma 1`] = `
[36m[1m ~ [22m[39m[39mmagma[39m[39m > [36mhop over the lava[39m[39m

`

exports[`lib/reports/base/test-point.test.jsx TAP > no match 1`] = `
[31m[1m ✖ [22m[39m[39mno match[39m

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/base/test-point.test.jsx[39m                                       [49m
[48;2;34;34;34m [38;2;119;119;119m 18 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mpass[39m[93m([39m[92m'this is fine'[39m[93m)[39m                                             [49m
[48;2;34;34;34m [38;2;119;119;119m 19 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'not so fine'[39m[93m)[39m                                              [49m
[48;2;34;34;34m[31m[1m>[22m[39m 20[38;2;119;119;119m | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mmatch[39m[93m([39m[33m{[39m[38;2;238;238;238ma[39m[93m:[39m [36m1[39m[33m}[39m[32m,[39m [33m{[39m[38;2;238;238;238ma[39m[93m:[39m [38;2;238;238;238mFunction[39m[33m}[39m[32m,[39m [92m'no match'[39m[93m)[39m                         [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                                [49m
[48;2;34;34;34m [38;2;119;119;119m 21 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mtest[39m[93m([39m[92m'test without fn is a todo'[39m[93m)[39m                                [49m
[48;2;34;34;34m [38;2;119;119;119m 22 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mtest[39m[93m([39m[92m'todo test with named reason'[39m[32m,[39m [33m{[39m [38;2;238;238;238mtodo[39m[93m:[39m [92m'i have my reasons'[39m [33m}[39m[93m)[39m[49m
[48;2;34;34;34m [38;2;119;119;119m 23 | [39m[36mconst[39m [38;2;238;238;238mer[39m [93m=[39m [31mnew[39m [38;2;238;238;238mError[39m[93m([39m[92m'this is an error'[39m[93m)[39m                              [49m

  [38;2;51;0;0m[48;2;255;153;204m--- expected                 [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual                   [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m Object {                    [39m[49m
  [38;2;51;0;0m[48;2;255;153;204m-  "a": Function Function(), [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+  "a": 1,                   [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }                           [39m[49m

  test: ""
  stack: "{stack}"

`

exports[`lib/reports/base/test-point.test.jsx TAP > not so fine 1`] = `
[31m[1m ✖ [22m[39m[39mnot so fine[39m

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/base/test-point.test.jsx[39m                                       [49m
[48;2;34;34;34m [38;2;119;119;119m 17 | [39m                                                                      [49m
[48;2;34;34;34m [38;2;119;119;119m 18 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mpass[39m[93m([39m[92m'this is fine'[39m[93m)[39m                                             [49m
[48;2;34;34;34m[31m[1m>[22m[39m 19[38;2;119;119;119m | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'not so fine'[39m[93m)[39m                                              [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                                [49m
[48;2;34;34;34m [38;2;119;119;119m 20 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mmatch[39m[93m([39m[33m{[39m[38;2;238;238;238ma[39m[93m:[39m [36m1[39m[33m}[39m[32m,[39m [33m{[39m[38;2;238;238;238ma[39m[93m:[39m [38;2;238;238;238mFunction[39m[33m}[39m[32m,[39m [92m'no match'[39m[93m)[39m                         [49m
[48;2;34;34;34m [38;2;119;119;119m 21 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mtest[39m[93m([39m[92m'test without fn is a todo'[39m[93m)[39m                                [49m
[48;2;34;34;34m [38;2;119;119;119m 22 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mtest[39m[93m([39m[92m'todo test with named reason'[39m[32m,[39m [33m{[39m [38;2;238;238;238mtodo[39m[93m:[39m [92m'i have my reasons'[39m [33m}[39m[93m)[39m[49m

  test: ""
  stack: "{stack}"

`

exports[`lib/reports/base/test-point.test.jsx TAP > should be equal 1`] = `
[31m[1m ✖ [22m[39m[39mshould be equal[39m

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/base/test-point.test.jsx[39m                                [49m
[48;2;34;34;34m [38;2;119;119;119m 27 | [39m[36mconst[39m [38;2;238;238;238mextra[39m [93m=[39m [33m{[39m [38;2;238;238;238morigin[39m[93m:[39m [38;2;238;238;238mcleanYamlObject[39m[93m([39m[38;2;238;238;238mextraFromError[39m[93m([39m[38;2;238;238;238mer[39m[93m)[39m[93m)[39m [33m}[39m  [49m
[48;2;34;34;34m [38;2;119;119;119m 28 | [39m[38;2;238;238;238mtest[39m[32m.[39m[91merror[39m[93m([39m[38;2;238;238;238mer[39m[32m,[39m [92m'to er is to fail this assertion'[39m[32m,[39m [38;2;238;238;238mextra[39m[93m)[39m       [49m
[48;2;34;34;34m[31m[1m>[22m[39m 29[38;2;119;119;119m | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mequal[39m[93m([39m[36m1[39m[32m,[39m [36m2[39m[93m)[39m                                               [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                         [49m
[48;2;34;34;34m [38;2;119;119;119m 30 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238msame[39m[93m([39m[33m{[39m[38;2;238;238;238ma[39m[93m:[39m [36m1[39m[33m}[39m[32m,[39m [33m{[39m[38;2;238;238;238mb[39m[93m:[39m [36m2[39m[33m}[39m[93m)[39m                                      [49m
[48;2;34;34;34m [38;2;119;119;119m 31 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'magma'[39m[32m,[39m [33m{[39m [38;2;238;238;238mskip[39m[93m:[39m [92m'hop over the lava'[39m [33m}[39m[93m)[39m              [49m
[48;2;34;34;34m [38;2;119;119;119m 32 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'rope'[39m[32m,[39m [33m{[39m [38;2;238;238;238mskip[39m[93m:[39m [91mtrue[39m [33m}[39m[93m)[39m                              [49m

  [38;2;51;0;0m[48;2;255;153;204m--- wanted [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ found  [49m[39m
  [38;2;51;0;0m[48;2;255;153;204m-2         [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+1         [49m[39m

  test: ""
  stack: "{stack}"

`

exports[`lib/reports/base/test-point.test.jsx TAP > should be equivalent 1`] = `
[31m[1m ✖ [22m[39m[39mshould be equivalent[39m

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/base/test-point.test.jsx[39m                           [49m
[48;2;34;34;34m [38;2;119;119;119m 28 | [39m[38;2;238;238;238mtest[39m[32m.[39m[91merror[39m[93m([39m[38;2;238;238;238mer[39m[32m,[39m [92m'to er is to fail this assertion'[39m[32m,[39m [38;2;238;238;238mextra[39m[93m)[39m  [49m
[48;2;34;34;34m [38;2;119;119;119m 29 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mequal[39m[93m([39m[36m1[39m[32m,[39m [36m2[39m[93m)[39m                                          [49m
[48;2;34;34;34m[31m[1m>[22m[39m 30[38;2;119;119;119m | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238msame[39m[93m([39m[33m{[39m[38;2;238;238;238ma[39m[93m:[39m [36m1[39m[33m}[39m[32m,[39m [33m{[39m[38;2;238;238;238mb[39m[93m:[39m [36m2[39m[33m}[39m[93m)[39m                                 [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                    [49m
[48;2;34;34;34m [38;2;119;119;119m 31 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'magma'[39m[32m,[39m [33m{[39m [38;2;238;238;238mskip[39m[93m:[39m [92m'hop over the lava'[39m [33m}[39m[93m)[39m         [49m
[48;2;34;34;34m [38;2;119;119;119m 32 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'rope'[39m[32m,[39m [33m{[39m [38;2;238;238;238mskip[39m[93m:[39m [91mtrue[39m [33m}[39m[93m)[39m                         [49m
[48;2;34;34;34m [38;2;119;119;119m 33 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mresume[39m[93m([39m[93m)[39m                                             [49m

  [38;2;51;0;0m[48;2;255;153;204m--- expected [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual   [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m Object {    [39m[49m
  [38;2;0;51;0m[48;2;204;255;153m+  "a": 1,   [49m[39m
  [38;2;51;0;0m[48;2;255;153;204m-  "b": 2,   [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }           [39m[49m

  test: ""
  stack: "{stack}"

`

exports[`lib/reports/base/test-point.test.jsx TAP > test without fn is a todo 1`] = `
[35m[1m ☐ [22m[39m[39mtest without fn is a todo[39m

`

exports[`lib/reports/base/test-point.test.jsx TAP > this is fine 1`] = `
[32m[1m ✓ [22m[39m[39mthis is fine[39m

`

exports[`lib/reports/base/test-point.test.jsx TAP > to er is to fail this assertion 1`] = `
[31m[1m ✖ [22m[39m[39mto er is to fail this assertion[39m

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/base/test-point.test.jsx[39m                                [49m
[48;2;34;34;34m [38;2;119;119;119m 26 | [39m[36mconst[39m [38;2;238;238;238mextraFromError[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/extra-from-error.js'[39m[93m)[39m  [49m
[48;2;34;34;34m [38;2;119;119;119m 27 | [39m[36mconst[39m [38;2;238;238;238mextra[39m [93m=[39m [33m{[39m [38;2;238;238;238morigin[39m[93m:[39m [38;2;238;238;238mcleanYamlObject[39m[93m([39m[38;2;238;238;238mextraFromError[39m[93m([39m[38;2;238;238;238mer[39m[93m)[39m[93m)[39m [33m}[39m  [49m
[48;2;34;34;34m[31m[1m>[22m[39m 28[38;2;119;119;119m | [39m[38;2;238;238;238mtest[39m[32m.[39m[91merror[39m[93m([39m[38;2;238;238;238mer[39m[32m,[39m [92m'to er is to fail this assertion'[39m[32m,[39m [38;2;238;238;238mextra[39m[93m)[39m       [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----[1m^[22m[39m                                                         [49m
[48;2;34;34;34m [38;2;119;119;119m 29 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mequal[39m[93m([39m[36m1[39m[32m,[39m [36m2[39m[93m)[39m                                               [49m
[48;2;34;34;34m [38;2;119;119;119m 30 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238msame[39m[93m([39m[33m{[39m[38;2;238;238;238ma[39m[93m:[39m [36m1[39m[33m}[39m[32m,[39m [33m{[39m[38;2;238;238;238mb[39m[93m:[39m [36m2[39m[33m}[39m[93m)[39m                                      [49m
[48;2;34;34;34m [38;2;119;119;119m 31 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mfail[39m[93m([39m[92m'magma'[39m[32m,[39m [33m{[39m [38;2;238;238;238mskip[39m[93m:[39m [92m'hop over the lava'[39m [33m}[39m[93m)[39m              [49m

  test: ""
  stack: "{stack}"

  Error Origin:

[48;2;34;34;34m[38;2;170;170;170m  lib/reports/base/test-point.test.jsx[39m                                       [49m
[48;2;34;34;34m [38;2;119;119;119m 21 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mtest[39m[93m([39m[92m'test without fn is a todo'[39m[93m)[39m                                [49m
[48;2;34;34;34m [38;2;119;119;119m 22 | [39m[38;2;238;238;238mtest[39m[32m.[39m[38;2;238;238;238mtest[39m[93m([39m[92m'todo test with named reason'[39m[32m,[39m [33m{[39m [38;2;238;238;238mtodo[39m[93m:[39m [92m'i have my reasons'[39m [33m}[39m[93m)[39m[49m
[48;2;34;34;34m[31m[1m>[22m[39m 23[38;2;119;119;119m | [39m[36mconst[39m [38;2;238;238;238mer[39m [93m=[39m [31mnew[39m [38;2;238;238;238mError[39m[93m([39m[92m'this is an error'[39m[93m)[39m                              [49m
[48;2;34;34;34m     [38;2;119;119;119m| [39m[31m-----------[1m^[22m[39m                                                          [49m
[48;2;34;34;34m [38;2;119;119;119m 24 | [39m[32m// polyfill until tap publishes the origin-tracking feature[39m           [49m
[48;2;34;34;34m [38;2;119;119;119m 25 | [39m[36mconst[39m [38;2;238;238;238mcleanYamlObject[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/clean-yaml-object.js'[39m[93m)[39m       [49m
[48;2;34;34;34m [38;2;119;119;119m 26 | [39m[36mconst[39m [38;2;238;238;238mextraFromError[39m [93m=[39m [38;2;238;238;238mrequire[39m[93m([39m[92m'tap/lib/extra-from-error.js'[39m[93m)[39m         [49m

  stack: |
    Object.<anonymous> (lib/reports/base/test-point.test.jsx:23:12)
    Module.replacementCompile (node_modules/append-transform/index.js:58:13)
    module.exports (node_modules/default-require-extensions/js.js:7:9)
    node_modules/append-transform/index.js:62:4
    Object.<anonymous> (node_modules/append-transform/index.js:62:4)
  message: this is an error

`

exports[`lib/reports/base/test-point.test.jsx TAP > todo test with named reason 1`] = `
[35m[1m ☐ [22m[39m[39mtodo test with named reason[39m[39m > [35mi have my reasons[39m[39m

`
