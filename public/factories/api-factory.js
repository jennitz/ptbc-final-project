(function(){
    angular.module('app')
    .factory('APIFactory', function($http){
        var data;
        return{
            getFitBitProfile
            // getSteps
        
        };
           function getFitBitProfile (){
               return $http.get('/fitbit/user/-/profile.json');
                
        }; 
        // function getSteps(){
        //     return $http.get('/fitbit/user/-/activities/today/1d.json');
        // };

    });
})();