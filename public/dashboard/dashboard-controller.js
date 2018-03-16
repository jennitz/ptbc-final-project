(function(){
  angular.module('app')
  .controller('DashboardController', function(APIFactory){

    var vm = this;
    vm.getData = function(){
      APIFactory.getFitBitProfile().then(function(result){
          vm.user = result.data;
          console.log(result);
      });
    };
    //   vm.getDaily = function(){
    //     APIFactory.getSteps().then(function(result){
    //         vm.steps = result.data;
    //         console.log(result);
    //     });
    // };
    vm.getData();
    // vm.getDaily();

  });
})();
