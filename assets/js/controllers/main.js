app.controller('main', function ($scope, $http) {
	$http.get('/getuser').success(function (user) {
		console.log(user);
		$scope.user = user;
	});
}); 