(function(){
  angular.module('app')
    .controller('ChallengesController', function(APIFactory){
      var vm = this;
      vm.companyUSA = [{name: "Microsoft",
                        totalSteps: "65897",
                        logo: "/images/microsoft.png"},
       {name: "Little Ceasers",
                        totalSteps: "50876",
                        logo: "/images/lc.jpg"},
      {name: "Under Armour",
                        totalSteps: "30765",
                        logo: "/images/ua.png"},
      {name: "Quicken Loans",
                        totalSteps: "78967",
                        logo: "/images/ql.jpg"},
      {name: "Nike",
                        totalSteps: "100285",
                        logo: "/images/nike.png"}];
      vm.companyDET = [{name: "Little Ceasers",
                        totalSteps: "50876",
                        logo: "/images/lc.jpg"},
      {name: "Under Armour",
                        totalSteps: "30765",
                        logo: "/images/ua.png"},
      {name: "Quicken Loans",
                        totalSteps: "78967",
                        logo: "/images/ql.jpg"},
      {name: "Nike",
                        totalSteps: "100285",
                        logo: "/images/nike.png"},
      {name: "Detroit Tigers",
                        totalSteps: "25987",
                        logo: "/images/dt.png"}]
      vm.sorterFunc = function(name){
                          return -parseInt(name.totalSteps);
                      };

      vm.getWeekly = function(){
            APIFactory.getWeeklySteps().then(function(result){
                vm.steps = result.data;
                        console.log(result);
      });
    };
vm.getWeekly();


  });  


})();
