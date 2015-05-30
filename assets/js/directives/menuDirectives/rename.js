CK.directive('renameFile', function ($http) {
	return {
		link : function ($scope, $element, $attrs) {
			// var d = JSON.parse($attrs.createFile);
			// $element.on('click', function () {
			// 	$http.get('/rename', {file : d.path}).success()
			// 	return false; 
			// });
		}
	}
})