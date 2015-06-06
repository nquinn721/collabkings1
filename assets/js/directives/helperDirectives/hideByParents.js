CK.directive('hideByParents', function () {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			var data = JSON.parse($attrs.hideByParents);
			if(data)
				for(var i in data)
					(function(d){
						$scope.$watch('fileopen' + d, function (a,b) {
							if(a === false)
								$element.addClass('none' + d);
							else if(a === true)
								$element.removeClass('none' + d);
						});
					}(data[i]))
		}
	}
})