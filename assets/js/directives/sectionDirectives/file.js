CK.directive('file', function () {
	var url;
	return {   
		restrict : 'A',
		link : function ($scope, $element, $attr) {

           	$scope.contentUrl = 'templates/file.html';


			$scope.openFolder = function (e) {
				var p = this.file.path.split('/').pop();
				$scope.$parent['fileopen' + p] = !$scope.$parent['fileopen' + p];
			
				$scope['filename' + this.file.name] = !$scope['filename' + this.file.name];
			}

			$scope.loadFile = function () {

			}
		},
		template : '<div ng-include="contentUrl" include-replace></div>'
		// templateUrl : 'templates/file.html'
	}
});