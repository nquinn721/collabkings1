CK.directive('contextMenu', function () {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			$element.on('contextmenu', function(){
				console.log('context menu');
				return false;
			});
		}
	}
})