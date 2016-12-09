'use strict'

var eg = require('earlgrey/5')

exports.name = 'earlgrey'
exports.inputFormats = ['eg', 'earlgrey']
exports.outputFormat = 'js'

exports.render = function (str, options) {
  options = options || {}
  options.es5 = true
  // eslint-disable-next-line new-cap
  var gen = eg.Generator(options)
  // eslint-disable-next-line new-cap
  var code = gen.generate(eg.Source(str))
  return code.code
}
