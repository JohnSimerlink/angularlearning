import angular from 'angular'
function createevent(){
  return {
    restrict: 'E',
    scope: {
      name: "="
    },
    template: require('../templates/createevent.html')
      //'<h2> This is an Event creator </h2>'
  }
}

export default angular.module('directives.createevent', [])
  .directive('createevent', createevent)
  .name
