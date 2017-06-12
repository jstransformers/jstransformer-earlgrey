'use strict'

const eg = require('earlgrey/5')

exports.name = 'earlgrey'
exports.inputFormats = ['eg', 'earlgrey']
exports.outputFormat = 'js'

exports.render = function (str, options) {
  options = options || {}
  options.es5 = true
  // eslint-disable-next-line new-cap
  const gen = eg.Generator(options)
  // eslint-disable-next-line new-cap
  const code = gen.generate(eg.Source(str))
  return code.code
}
