(function(){
	angular.module('app')
		.component('carousel', {
			templateUrl: 'carousel/carousel.html',
			controller: 'CarouselController',
			bindings: {
				pictures:'<'
			}
		})
})();