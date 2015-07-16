# jstransformer-earlgrey

[Earl Grey](http://breuleux.github.io/earl-grey/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-earlgrey/master.svg)](https://travis-ci.org/jstransformers/jstransformer-earlgrey)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-earlgrey/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-earlgrey?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-earlgrey/master.svg)](http://david-dm.org/jstransformers/jstransformer-earlgrey)
[![NPM version](https://img.shields.io/npm/v/jstransformer-earlgrey.svg)](https://www.npmjs.org/package/jstransformer-earlgrey)

## Installation

    npm install jstransformer-earlgrey

## API

```js
var earlgrey = require('jstransformer')(require('jstransformer-earlgrey'))

earlgrey.render('my-variable = 1 + 2 + 3').body
//=> Compiled JavaScript
```

## License

MIT
