(function(){
	angular.module('app')
		.controller('CarouselController', function($interval){
			var vm = this;
			var classes = ['current', 'prev', 'next'];
			var intervalId;
			vm.$onInit = function(){
				for (var i = 0; i < classes.length; i++) {
					vm.pictures[i].className = classes[i]
					vm.pictures[i].currentPosition = classes[i];
				}

				intervalId = $interval(function(){
					for (var item of vm.pictures) {
						if (item.currentPosition === 'current') {
							item.className = 'prev'
						}
						if (item.currentPosition === 'prev') {
							item.className = 'next'
						}
						if (item.currentPosition === 'next') {
							item.className = 'current'
						}
					}

					vm.pictures = vm.pictures.map(function(item){
						return Object.assign(item, {currentPosition: item.className});
					});
				}, 5000);
			}

			vm.$onDestroy = function() {
				$interval.cancel(intervalId)
			}
		});
})();