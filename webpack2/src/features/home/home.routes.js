routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider.
    state('home', {
      url: '/'
      , template: require('./home.html')
      , controller: 'HomeController' //does angular, or the routes plugin, somehow instantiate an object of my controller?
      , controllerAs: 'home'
    })
}
