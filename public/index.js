(function(){
  angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<home></home>'
        })
        .when('/dashboard', {
          template: '<dashboard></dashboard>'
        })
        .when('/challenges', {
          template: '<challenges></challenges>'
        })
        .when('/badges', {
          template: '<badges></badges>'
        })

    });



})();
