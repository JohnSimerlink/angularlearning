import angular from 'angular'

function farewell(){
  return {
    restrict: 'E',
    scope: {
      name: "=" //TODO: what is this property?
    },
    template: "<h2> Farewell Person. Goodby: {{name}}</h2>"
  }
}

export default angular.module('directives.farewell', [])
  .directive('farewell', farewell)
  .name //TODO: add logging feature/middleware in a file/db
