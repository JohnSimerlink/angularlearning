console.log('app js called')
angular.module('EmailApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    'use strict';
    console.log('email app config called')
    $routeProvider
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      })
      .otherwise({
        redirectTo: '/inbox'
      })
  })