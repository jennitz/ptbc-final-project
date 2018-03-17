(function(){
  angular.module('app')
  .controller('BadgesController', function(APIFactory){

    var vm = this;
    vm.getTopBadges = function(){
      APIFactory.getBadges().then(function(result){
          vm.badges = result.data;
      });
    };
  vm.getTopBadges();
  });
})();