var fs = require('fs')
var path = require("path")
var changeCase = require("change-case")

var moduleName = path.basename(changeCase.camel(path.basename(__dirname)))

var controllerName = moduleName + 'Controller'

var directiveFn = function () {
  return {
    controller: controllerName,
    controllerAs: 'vm',
    bindToController: true,
    template: fs.readFileSync(__dirname + '/template.html'),
    scope: {}
  }
}

var dependencies = [require('../mn-firebase').name]

module.exports = angular.module(moduleName, dependencies)
  .factory(moduleName + 'Repository', require('./repository'))
  .controller(controllerName, require('./controller'))
  .directive(moduleName, directiveFn)
