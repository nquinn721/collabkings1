CK.directive('contextMenu', function ($document) {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			var cm = $('.context-menu');

			
			
			$element.on('contextmenu', function (e) {
				$scope.$parent.currentMenuItem = {
					element : $element,
					attrs : $attrs
				};

				cm.removeClass('none').css({
					left : e.pageX,
					top : e.pageY + 15
				});
				return false;
			});



		}
	}
})