(function(){
    angular.module('app')
    .factory('APIFactory', function($http){
        var data;
        return{
            getFitBitProfile,
            getSteps,
            getBadges
        
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

    });
})();