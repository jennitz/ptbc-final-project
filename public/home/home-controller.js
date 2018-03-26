(function(){
  angular.module('app')
    .controller('HomeController', function(){
		var vm = this;
		vm.slides = [
			{src: 'images/fit3.jpg'},
			{src: 'images/fit4.jpg'},
			{src: 'images/fit6.jpg'},
		

		];
	});



})();
