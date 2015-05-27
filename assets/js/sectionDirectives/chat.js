CK.directive('chat', function ($http) {
	return {   
		restrict : 'E',
		templateUrl : 'templates/chat.html',
		replace : true,
		link : function ($scope, $el, $attr) {

			// Initialize chat
			$scope.chat = {};
			$scope.chat.messages = [];
			$el.find('textarea').focus();


			io.socket.on('chatmessage', function (obj) {
				console.log(obj.user, $scope.user.username);
				// Set user to You for current user
				if(obj.user === $scope.user.username)obj.user = 'You';

				obj.time = moment().format('MMMM Do, h:mm a');
				$scope.chat.messages.push(obj);
				$scope.$digest();
			});

			
		
			$scope.sendChatMessage = function () {
				io.socket.get('/chatmessage', {
					user : $scope.user.username, 
					msg : $scope.chat.message
				});
				$scope.chat.message = '';
			}

		}
	}
});