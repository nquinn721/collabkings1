app.controller('main', ['$scope', '$http', function ($scope, $http) {
	$http.get('/user/1').success(function (user) {
		$scope.user = user;
	});
}]);