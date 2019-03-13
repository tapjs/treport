/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-asserts.js TAP a stream of parser-asserts > got expected events 1`] = `
Array [
  Array [
    "assert",
    Object {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "pass",
    Object {
      "ok": true,
      "id": 1,
      "name": "this is fine",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": false,
      "id": 1,
      "name": "child test > not so fine",
      "diag": Object {
        "at": Object {},
        "stack": null,
        "source": "  test.test('child test', tt => {\\n    tt.fail('not so fine')\\n-------^\\n    tt.ok(false, { todo: 'will do later' })\\n    tt.ok(false, { skip: 'skip this' })\\n",
      },
      "time": null,
    },
  ],
  Array [
    "fail",
    Object {
      "ok": false,
      "id": 1,
      "name": "child test > not so fine",
      "diag": Object {
        "at": Object {},
        "stack": null,
        "source": "  test.test('child test', tt => {\\n    tt.fail('not so fine')\\n-------^\\n    tt.ok(false, { todo: 'will do later' })\\n    tt.ok(false, { skip: 'skip this' })\\n",
      },
      "time": null,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": false,
      "id": 2,
      "todo": "will do later",
      "name": "child test > expect truthy value",
      "diag": Object {
        "at": Object {},
        "source": "    tt.fail('not so fine')\\n    tt.ok(false, { todo: 'will do later' })\\n-------^\\n    tt.ok(false, { skip: 'skip this' })\\n    tt.end()\\n",
        "stack": null,
      },
      "time": null,
    },
  ],
  Array [
    "todo",
    Object {
      "ok": false,
      "id": 2,
      "todo": "will do later",
      "name": "child test > expect truthy value",
      "diag": Object {
        "at": Object {},
        "source": "    tt.fail('not so fine')\\n    tt.ok(false, { todo: 'will do later' })\\n-------^\\n    tt.ok(false, { skip: 'skip this' })\\n    tt.end()\\n",
        "stack": null,
      },
      "time": null,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": false,
      "id": 3,
      "skip": "skip this",
      "name": "child test > expect truthy value",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "skip",
    Object {
      "ok": false,
      "id": 3,
      "skip": "skip this",
      "name": "child test > expect truthy value",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": false,
      "id": 1,
      "name": "lying child > lying",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "fail",
    Object {
      "ok": false,
      "id": 1,
      "name": "lying child > lying",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": true,
      "id": 2,
      "name": "lying child >",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "pass",
    Object {
      "ok": true,
      "id": 2,
      "name": "lying child >",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": true,
      "id": 1,
      "name": "lying child > this is fine",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "pass",
    Object {
      "ok": true,
      "id": 1,
      "name": "lying child > this is fine",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": true,
      "id": 3,
      "time": null,
      "name": "lying child",
      "diag": undefined,
    },
  ],
  Array [
    "pass",
    Object {
      "ok": true,
      "id": 3,
      "time": null,
      "name": "lying child",
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": true,
      "id": 4,
      "todo": true,
      "name": "todo test",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "todo",
    Object {
      "ok": true,
      "id": 4,
      "todo": true,
      "name": "todo test",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "assert",
    Object {
      "ok": true,
      "id": 5,
      "skip": true,
      "name": "skip test",
      "time": null,
      "diag": undefined,
    },
  ],
  Array [
    "skip",
    Object {
      "ok": true,
      "id": 5,
      "skip": true,
      "name": "skip test",
      "time": null,
      "diag": undefined,
    },
  ],
]
`
