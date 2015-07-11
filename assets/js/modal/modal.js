CK.directive('modal', function ($http) {
	return { 
		restrict : 'A',
		templateUrl : 'templates/modal.html',
		link : function ($scope, $element, $attrs) {
			var modalData = $.parseJSON($attrs.modal),
				modal = $('.modal');
			modal.appendTo('body');
			$element.attr('data-toggle',"modal").attr('data-target', ".modal-menu");
			$scope.modalTitle = 'Add a friend';
			$scope.modalButtonDefault = true;
			$scope.modalButtonDefaultText = 'Ok';
			$scope.modal = {
				modalError : '',
				modalInput : ''
			};


			$scope.ok = function (modalInput) {
				var url = modalData.url.substr(0,1) === '/' ? modalData.url : '/' + modalData.url;

				url += url.substr(-1) === '/' ?  $scope.modal.modalInput : '/' + $scope.modal.modalInput;


				$http.get(url).success(function (data) {
					resetModal();
					modal.modal('hide');
					if($scope[modalData.cb]) $scope[modalData.cb](data);
				}).error(function (err) {
					$scope.modal.modalError = err;
				});
			}

			function resetModal(){
				$scope.modal = {
					modalError : '',
					modalInput : ''
				};
			}
		}
	}
});
