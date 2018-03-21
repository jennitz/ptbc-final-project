(function(){
  angular.module('app')
    .controller('ChallengesController', function(){
      var vm = this;
      vm.microsoft = { name: "Microsoft",
                        totalSteps: "29875",
                        logo: "/images/microsoft.png"};
      vm.lc = { name: "Little Ceasers",
                        totalSteps: "50876",
                        logo: "/images/lc.jpg"};
      vm.ua = { name: "Under Armour",
                        totalSteps: "30765",
                        logo: "/images/ua.png"};
      vm.ql = { name: "Quicken Loans",
                        totalSteps: "78967",
                        logo: "/images/ql.jpg"};
      vm.nike = { name: "Nike",
                        totalSteps: "100285",
                        logo: "/images/nike.png"};
      vm.dt = { name: "Detroit Tigers",
                        totalSteps: "65987",
                        logo: "/images/dt.png"};





    });



})();
