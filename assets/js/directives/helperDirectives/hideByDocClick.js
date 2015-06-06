CK.directive('hideByDocClick', function ($rootScope, $document) {
	return {
		restrict : 'A',
		scope : true,
		link : function ($scope, $element, $attrs) {
			$document.on('click', function (e) {
				var target = $(e.target),
					sameElement = target
			          .parents()
			          .is($element)
			          || $element === target;

		        if (sameElement)
		          return;

		      	if($attrs.hideByDocClick){
		      		if(target.hasClass($attrs.hideByDocClick) || target.parents().hasClass($attrs.hideByDocClick))return false;
		      	} else{
		      		if($element.attr('ng-show'))
		      			$rootScope[$element.attr('ng-show')] = false;
		      		else
						$element.addClass('none');
		      	}
			});
		}
	}
})