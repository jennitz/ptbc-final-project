(function(){
    angular.module('app')
    .factory('APIFactory', function($http){
        var data;
        return{
            getFitBitProfile,
            getSteps,
            getBadges,
            getWeeklySteps
        
        };
           function getFitBitProfile (){
               return $http.get('/fitbit/user/-/profile.json');
                
        }; 
        function getSteps(){
            return $http.get('/fitbit/user/-/activities/steps/date/today/1d.json');
        };
        function getBadges(){
            return $http.get('/fitbit/user/-/badges.json');
        };
        function getWeeklySteps(){
            return $http.get('/fitbit/user/-/activities/steps/date/2018-03-01/2018-03-31.json');
        };

    });
})();