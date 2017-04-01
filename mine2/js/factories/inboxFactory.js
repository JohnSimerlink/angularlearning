angular.module('EmailApp')
  .factory('InboxFactory', function InboxFactory (
    $http,
    $q
    ) {
    'use strict';

    var exports = {};

    exports.messages = []

    exports.getMessages = function () {
      var deferred = $q.defer();
      return $http.get('json/emails.json')
          .success(function(data){
              exports.messages = data;
              deferred.resolve(data);
          })
          .error(function(data){
            deferred.reject(data);
          })
      return deferred.promise;
    }



    return exports;
  })