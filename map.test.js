const map = require('./map.js')
const t = require('tap')
t.equal(map('lib/foo/bar.test.jsx'), 'lib/foo/bar.js')
