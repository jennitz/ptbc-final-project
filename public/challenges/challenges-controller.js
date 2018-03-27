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
                }).then(function(){
                  vm.getDetails();
                  vm.getEmpDetails();
                });
              
                });
               
      
    };
    vm.getWeekly();
    vm.getDetails = function(){
      DataFactory.getDetails().then(function(result){
          vm.company = result.data;
          console.log(result);
         
          
      });
    };
    vm.getEmpDetails = function(){
      DataFactory.getEmp().then(function(result){
          vm.emp = result.data;
          console.log(result);
         
          
      });
    };
    vm.getEmpDetails();
    vm.sorterFunc = function(name){
      return -parseInt(name.totalSteps);
  };
  vm.sorterFuncemp = function(emp){
    return -parseInt(emp.challengeSteps);
};
    vm.getDetails();
    vm.getEmpDetails();



  });  


})();
