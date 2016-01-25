'use strict'

var eg = require('earlgrey/5')

exports.name = 'earlgrey'
exports.inputFormats = ['eg', 'earlgrey']
exports.outputFormat = 'js'

exports.render = function (str, options) {
  options = options || {}
  options.es5 = true
  var gen = eg.Generator(options)
  var code = gen.generate(eg.Source(str))
  return code.code
}
