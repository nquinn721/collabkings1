CK.controller('main', function ($scope, $http) {
	$http.get('/getuser').success(function (user) {
		$scope.user = user;
	});

	$scope.showUserMenu = function () {
		$scope.isPopupVisible = !$scope.isPopupVisible;
	}

	$scope.logout = function () {
		$http.get('/logout');
		window.location.pathname = '/';
	}
}); 