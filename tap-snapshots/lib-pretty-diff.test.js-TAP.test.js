/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`lib/pretty-diff.test.js TAP > a pretty diff at 0 columns 1`] = `
  [38;2;51;0;0m[48;2;255;153;204m--- expected                                                       [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual                                                         [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m Object {                                                          [39m[49m
  [38;2;0;51;0m[48;2;204;255;153m+  "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a": 1, [49m[39m
  [38;2;51;0;0m[48;2;255;153;204m-  "b": 2,                                                         [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }                                                                 [39m[49m
`

exports[`lib/pretty-diff.test.js TAP > a pretty diff at 2 columns 1`] = `
  [38;2;51;0;0m[48;2;255;153;204m--- expected[49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual[49m[39m
  [48;2;255;255;255m[38;2;17;17;17m Object {[39m[49m
  [38;2;0;51;0m[48;2;204;255;153m+  "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a": 1,[49m[39m
  [38;2;51;0;0m[48;2;255;153;204m-  "b": 2,[49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }[39m[49m
`

exports[`lib/pretty-diff.test.js TAP > a pretty diff at 40 columns 1`] = `
  [38;2;51;0;0m[48;2;255;153;204m--- expected                        [49m[39m
  [38;2;0;51;0m[48;2;204;255;153m+++ actual                          [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m Object {                           [39m[49m
  [38;2;0;51;0m[48;2;204;255;153m+  "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a": 1,[49m[39m
  [38;2;51;0;0m[48;2;255;153;204m-  "b": 2,                          [49m[39m
  [48;2;255;255;255m[38;2;17;17;17m }                                  [39m[49m
`

exports[`lib/pretty-diff.test.js TAP > a pretty diff without ansi support 1`] = `
  [31m--- expected                        [39m
  [32m+++ actual                          [39m
  [0m Object {                           [0m
  [32m+  "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a": 1,[39m
  [31m-  "b": 2,                          [39m
  [0m }                                  [0m
`
