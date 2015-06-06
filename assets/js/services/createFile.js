CK.factory('createFile', function ($rootScope) {
	return {
		show : function () {
			$rootScope.createFileName = '';
			$rootScope.createFileInput = true;
		},
		hide : function () {
			$rootScope.createFileInput = false;
		},
		getValue : function () {
			return $rootScope.createFileName;
		}
	}
})