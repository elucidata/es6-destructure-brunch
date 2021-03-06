// Generated by CoffeeScript 1.7.1
var ES6DestructurePlugin, transform;

transform = require('es6-destructuring-jstransform');

module.exports = ES6DestructurePlugin = (function() {
  ES6DestructurePlugin.prototype.brunchPlugin = true;

  ES6DestructurePlugin.prototype.type = 'javascript';

  ES6DestructurePlugin.prototype.pattern = /\.js/;

  function ES6DestructurePlugin(config) {
    var _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    this.config = config;
    this.filter = ((_ref = this.config) != null ? (_ref1 = _ref.plugins) != null ? (_ref2 = _ref1.es6Destructure) != null ? _ref2.fileFilter : void 0 : void 0 : void 0) || /^(app|test)/;
    this.verbose = ((_ref3 = this.config) != null ? (_ref4 = _ref3.plugins) != null ? (_ref5 = _ref4.es6Destructure) != null ? _ref5.verbose : void 0 : void 0 : void 0) || false;
  }

  ES6DestructurePlugin.prototype.compile = function(params, callback) {
    var err, output, source;
    source = params.data;
    if (!this.filter.test(params.path)) {
      return callback(null, {
        data: source
      });
    }
    try {
      output = transform(source).code;
    } catch (_error) {
      err = _error;
      if (this.verbose) {
        console.log("ERROR", err);
      }
      return callback(err.toString());
    }
    return callback(null, {
      data: output
    });
  };

  return ES6DestructurePlugin;

})();
