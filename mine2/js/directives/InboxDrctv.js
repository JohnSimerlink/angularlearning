angular.module('EmailApp')
  .directive('inbox', function InboxDrctv() {
    'use strict';

    return {
      restrict: 'EA',
      replace: 'true',
      scope: 'true',
      templateUrl: 'js/directives/inbox.tmpl.html?d='+ new Date().getMilliseconds(),
      controllerAs: 'inbox',
      controller: function (InboxFactory){
        var ctrl = this;
        this.messages = []

        InboxFactory.getMessages()
            .then(angular.bind(this, function then() {
                  console.log('then function run,', arguments)
                  this.messages = InboxFactory.messages;
              // body...
            }))
      },
      link: function (scope, element, attrs, ctrl) {
        
      }
    }
  })