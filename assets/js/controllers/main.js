CK.controller('main', function ($scope, $http) {
	io.socket.get('/joinroom');
	$http.get('/getuser').success(function (user) {
		$scope.user = user;
	});
	$http.get('/allusers').success(function (users) {
		$scope.users = users;
	})

	
	$scope.logout = function () {
		$http.get('/logout');
		window.location.pathname = '/';
	}



}); 