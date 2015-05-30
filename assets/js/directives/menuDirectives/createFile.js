CK.directive('createFile', function ($http, showClickAndHide) {
	return {
		link : function ($scope, $element, $attrs) {
			var createFileInput = $('.create-file-input');

			$element.on('click', function (e) {
				createFileInput
					.removeClass('none')
					.find('input')
					.focus();

				showClickAndHide($element);
				return false;
			});

			$scope.$parent.createFile = function (a,b,c) {
				var path = $scope.$parent.currentMenuItem.attrs.path;
				if(path.indexOf('/'))
					path = path.split('/').slice(0, -1).join('/');
				console.log($scope.$parent.createFileName);
				// $http.get('/createfile', {file : d.path}).success()
			}
		}
	}
})