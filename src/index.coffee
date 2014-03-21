transform = require 'es6-destructuring-jstransform'


module.exports = class ES6DestructurePlugin
  brunchPlugin: yes
  type: 'javascript'
  pattern: /\.js/

  constructor: (@config) ->
    @filter= @config?.plugins?.es6Destructure?.fileFilter or /^(app|test)/
    @verbose= @config?.plugins?.es6Destructure?.verbose or no
    console.log "INIT", transform

  compile: (params, callback) ->
    source= params.data

    return callback null, data:source unless @filter.test(params.path)

    try
      output= transform( source ).code
    
    catch err
      console.log "ERROR", err if @verbose
      return callback err.toString()
    
    callback null, data:output

