CK.directive('hideByDocClick', function ($document) {
	return {
		restrict : 'A',
		scope : true,
		link : function ($scope, $element, $attrs) {
			$document.on('click', function (e) {
				var sameElement = $(event.target)
		          .parents()
		          .is($element)
		          || $element[0] === event.target;

		        if (sameElement)
		          return;
		      	
				$element.addClass('none');
			});
		}
	}
})