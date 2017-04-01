import angular from 'angular'
import uirouter from 'angular-ui-router'

import HomeController from './home.controller.js'
import routing from './home.routes'
import './home.css'
import randomNames from '../../services/randomNames.service';//TODO how to import path relative from base, rather than relative from current file?
import greeting from '../../directives/greeting.directive'
import farewell from '../../directives/farewell.directive'

export default angular.module('app.home', [uirouter, randomNames, greeting, farewell])
  .config(routing)
  .controller('HomeController', HomeController)
  .name
//TODO find/make a webpack preprocessor similar to vue components
