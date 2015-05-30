CK.factory('createFile', function ($rootScope) {
	return {
		show : function () {
			$rootScope.createFileInput = true;
		},
		hide : function () {
			$rootScope.createFileInput = false;
		}
	}
})