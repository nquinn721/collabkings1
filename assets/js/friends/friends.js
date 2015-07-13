CK.directive('friends', function ($http) {
	return {
		restrict : 'E',
		templateUrl : 'templates/friends.html',
		replace : true,
		link : function ($scope, $element, $attrs) {
			$scope.removeFriend = function (friend) {
				$http.get('/removefriend/' + friend);
			}

		}
	}
})