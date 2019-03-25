require('../../term-setup.test.js')
const t = require('tap')
const counts = require('./counts.js')

const cases = [
  [0,0,0,0],
  [0,0,0,1],
  [0,0,1,0],
  [0,0,1,1],
  [0,1,0,0],
  [0,1,0,1],
  [0,1,1,0],
  [0,1,1,1],
  [1,0,0,0],
  [1,0,0,1],
  [1,0,1,0],
  [1,0,1,1],
  [1,1,0,0],
  [1,1,0,1],
  [1,1,1,0],
  [1,1,1,1],
  [0,0,0,2],
  [0,0,2,0],
  [0,0,2,2],
  [0,2,0,0],
  [0,2,0,2],
  [0,2,2,0],
  [0,2,2,2],
  [2,0,0,0],
  [2,0,0,2],
  [2,0,2,0],
  [2,0,2,2],
  [2,2,0,0],
  [2,2,0,2],
  [2,2,2,0],
  [2,2,2,2],
]

cases.forEach(set => {
  const [pass, fail, todo, skip] = set
  const total = pass + fail + todo + skip
  t.matchSnapshot(counts({pass, fail, todo, skip, total}),
    JSON.stringify({pass, fail, todo, skip, total}))
})
