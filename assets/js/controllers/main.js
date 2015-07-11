CK.controller('main', function ($scope, $http) {
	io.socket.get('/joinroom');
	io.socket.on('user', function (user) {
		console.log(user);
		$scope.user = user;
		$scope.$apply();
	});
	$http.get('/getuser').success(function (user) {
		console.log(user);
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