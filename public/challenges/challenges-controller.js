(function(){
  angular.module('app')
    .controller('ChallengesController', function(APIFactory,DataFactory){
      var vm = this;
   

      vm.getWeekly = function(){
            APIFactory.getWeeklySteps().then(function(result){
                vm.steps = result.data['activities-steps'].map(function(activity){
                  return parseInt(activity.value);
                }).reduce(function(prev, curr){
                  return prev + curr;
                }, 0);
                DataFactory.patch(1,  {
                
                      "challengeSteps" : vm.steps
                }
              )
              
                });
               
      
    };
    vm.getWeekly();
    vm.getEmpDetails = function(){
      DataFactory.getEmp().then(function(result){
         vm.empSteps = result.data.challengeSteps.map(function(activity){
            return parseInt(activity.value);
          }).reduce(function(prev, curr){
            return prev + curr;
          }, 0);
          console.log(empSteps);
          
          
                                
        
                                
    });
         
         
          
      };
    vm.getEmpDetails();
    vm.getDetails = function(){
      DataFactory.getDetails().then(function(result){
          vm.company = result.data;
          console.log(result);
         
          
      });
    };
    vm.sorterFunc = function(name){
      return -parseInt(name.totalSteps);
  };
    vm.getDetails();



  });  


})();
