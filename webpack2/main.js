import './main.css'; 
import angular from 'angular';
import uirouter from 'angular-ui-router'
import routing from './app.config';
import home from './src/features/home'

document.write('hello cyriac');
angular.module('app', [uirouter, home])
  .config(routing);
