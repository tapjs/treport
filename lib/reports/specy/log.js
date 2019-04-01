const React = require('react')
const importJSX = require('import-jsx')
const {Static} = require('ink')
const {Result} = importJSX('../base')

module.exports = ({log}) => (
  <Static>{
    log.filter(result => result.hasOwnProperty('raw'))
      .map((result, i) => (<Result {...result} key={`${i}`} /> ))
  }</Static>
)
