CK.directive('modal', function () {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			$element.attr('data-toggle',"modal").attr('data-target', ".modal-menu");
			$scope.modalTitle = 'This is the modal title';
			$scope.modalBody = 'This is some modal body';
			$scope.modalButtonPrimary = true;
			$scope.modalButtonPrimaryText = 'Ok';
			$scope.update = function () {
				console.log(this);
			}
		}
	}
});
