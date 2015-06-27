CK.directive('focus', function ($rootScope, $timeout) {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {

			$rootScope.$watch($attrs.focus, function () {
				if($rootScope[$attrs.focus])
					$timeout(function(){$element.focus()}, 0);
			})
		}
	}
})