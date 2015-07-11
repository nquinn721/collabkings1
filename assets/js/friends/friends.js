CK.directive('friends', function () {
	return {
		restrict : 'E',
		templateUrl : 'templates/friends.html',
		replace : true,
		link : function ($scope, $element, $attrs) {
			$scope.removeFriend = function () {
				console.log(this);
			}
		}
	}
})