(function(){
  angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'home/home.html'
        })
        .when('/login', {
          templateUrl: 'login/login.html'
        })
        .when('/dashboard', {
          templateUrl: 'dashboard/dashboard.html'
        })
        .when('/challenges', {
          templateUrl: 'challenges/challenges.html'
        })
        .when('/badges', {
          templateUrl: 'badges/badges.html'
        })

    });



})();
