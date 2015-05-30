CK.directive('file', function () {
	var url;
	return {   
		restrict : 'A',
		link : function ($scope, $element, $attr) {
           	var p = $attr.parents,
           		url = $attr.file === 'true' ? 'file' : 'folder',
				left = ((p * 15) + ($attr.file === 'true' ? 15 : 0));


           	$scope.contentUrl = 'templates/' + url + '.html';
           	if(p !== '0')
				$element.css('padding-left', '+=' + left);
			else if(url === 'file')
				$element.css('padding-left', '+=' + 15);


			$scope.openFolder = function (e) {
				console.log('file');
				var p = this.file.path.split('/').pop();
				$scope.$parent['fileopen' + p] = !$scope.$parent['fileopen' + p];
				$scope['filename' + this.file.name] = !$scope['filename' + this.file.name];
			}

			$scope.loadFile = function () {

			}
		},
		template : '<div ng-include="contentUrl" include-replace></div>'
	}
});