(function(){
  angular.module('app')
    .controller('HomeController', function(){
		var vm = this;
		vm.slides = [
			{src: 'https://www.nestle.com.sg/asset-library/PublishingImages/Media/NHW/nutrition_for_family/img_workplace_workout.jpg'},
			{src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGSX5-_d0Oem2sXcH-nP7SVvrIM2RjDkLO4gMZEL-PRFREnfX7g'},
			{src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshwhbVa68m4hxEBN-nI4OmA9CAoBqb4icobLKmINFY6aUEbTPlA'},
		

		];
	});



})();
