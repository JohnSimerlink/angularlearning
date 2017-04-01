var app = angular.module('mainApp', [])

app.directive('myEmployee', function() {
  return {
    scope: {
      role: '@',
      boss: '@',
      name: '@'
    },
    restrict: 'E',
    template: "<h3> Employee Profile</h3> Role {{role}} {{boss}}</h3>" +
      "<p> Role: {{role}}</p>" +
      "<p> Name: {{name}}</p>" +
      "<p> Boss: {{boss}}</p>" +
      "<input name='role' ng-model='role' type='text'>" +
      "<input name='name' ng-model='name' type='name'>" +
      "<input name='boss' ng-model='boss' type='boss'>"
  }
})
