angular.module('EmailApp')
  .directive('inbox', function InboxDrctv() {
    'use strict';

    return {
      restrict: 'EA',
      replace: 'true',
      scope: 'true',
      templateUrl: 'js/directives/inbox.tmpl.html',
      controllerAs: 'inbox',
      controller: function (InboxFactory){

      },
      link: function (scope, element, attrs, ctrl) {
        
      }
    }
  })