CK.directive('hideByParents', function () {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			var data = JSON.parse($attrs.hideByParents);

			if(data)
				for(var i in data)
					$scope.$watch('fileopen' + data[i], function (a,b) {
						if(a === false)
							$element.addClass('none');
						else if(a === true)
							$element.removeClass('none');
					});
		}
	}
})