CK.directive('deleteFile', function ($http) {
	return {
		link : function ($scope, $element, $attrs) {
			// var d = JSON.parse($attrs.createFile);
			// $element.on('click', function () {
			// 	$http.get('/deletefile', {file : d.path}).success()
			// 	return false; 
			// });
		}
	}
})