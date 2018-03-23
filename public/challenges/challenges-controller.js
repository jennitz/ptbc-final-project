(function(){
  angular.module('app')
    .controller('ChallengesController', function(APIFactory,DataFactory){
      var vm = this;
      vm.getDetails = function(){
        DataFactory.getDetails().then(function(result){
            vm.company = result.data;
            console.log(result);
           
            
        });
    };
    vm.getDetails();
    
     
       
      vm.sorterFunc = function(name){
                          return -parseInt(name.totalSteps);
                      };

      vm.getWeekly = function(){
            APIFactory.getWeeklySteps().then(function(result){
                vm.steps = result.data['activities-steps'].map(function(activity){
                  return parseInt(activity.value);
                }).reduce(function(prev, curr){
                  return prev + curr;
                }, 0);
                console.log(vm.steps);
                });
               
      
    };
vm.getWeekly();



  });  


})();
