const React = require('react')
const importJSX = require('@isaacs/import-jsx')
const t = require('tap')
const {render} = require('ink-testing-library')
const Footer = importJSX('./footer.js')

// not too terribly much to do here!
const [pass, fail, skip, todo, total] = [1,1,1,1,4]
const r = render(<Footer
  suiteCounts={{pass,fail,skip,todo,total}}
  assertCounts={{pass,fail,skip,todo,total}}
  time={123} />)
t.matchSnapshot(r.lastFrame())
