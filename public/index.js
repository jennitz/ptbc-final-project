(function(){
  angular.module('app', ['ngRoute', 'ui.carousel'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<home></home>'
        })
        .when('/login', {
          template: '<login></login>'
        })
        .when('/dashboard', {
          template: '<dashboard></dashboard>'
        })
        .when('/challenges', {
          template: '<challenges></challenges>'
        })
        .when('/about', {
          template: '<about></about>'
        })
        .when('/department',{
          template: '<department></department>'
        })

    });



})();
