angular.module('EmailApp')
  .controller('InboxCtrl',
    function InboxCtrl(InboxFactory){
      'use strict';
      console.log('inbox ctrler started around ' + new Date().getMilliseconds())
      console.log(InboxFactory)
      InboxFactory.getMessages().success(function(data){
        console.log ('data received at' + new Date().getMilliseconds(), data)
      });
      this.title= 'My Inbox'
    }
  )