CK.directive('file', function () {
	var url;
	return {   
		restrict : 'A',
		scope : true,
		link : function ($scope, $element, $attr) {

           	$scope.contentUrl = 'templates/file.html';


			$scope.openFolder = function (e) {
				var p = this.file.name;
				$scope.$parent['fileopen' + p] = !$scope.$parent['fileopen' + p];
			
				$scope['filename' + p] = !$scope['filename' + p];
			}

			$scope.loadFile = function () {

			}
		},
		template : '<div ng-include="contentUrl" include-replace></div>'
	}
});