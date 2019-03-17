const slen = require('string-length')
const c = require('chalk')

const repeat = (n, c) => new Array(Math.max(n + 1, 0)).join(c)

module.exports = patch => {
  if (!patch)
    return null

  const columns = process.stdout.columns || 80
  let width = 0
  const maxLen = Math.max(columns - 5, 0)
  return patch.trimRight().split('\n').filter((line, index) => {
    if (slen(line) > width)
      width = Math.min(maxLen, slen(line))
    return !(
      line.match(/^\=+$/) ||
      line === '\\ No newline at end of file'
    )
  }).map(line =>
    slen(line) <= width
    ? line + repeat(width - slen(line) + 1, ' ')
    : line
  ).map(line =>
    line.charAt(0) === '+'
      ? c.ansi256(22).bgAnsi256(193)(line)
    : line.charAt(0) === '-'
      ? c.ansi256(52).bgAnsi256(218)(line)
    : c.bgHex('#fff').hex('#111')(line)
  ).map(l => c.bgHex('#222')('  ') + l).join('\n').trimRight()
}
