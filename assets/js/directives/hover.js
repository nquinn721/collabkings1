CK.module('hover', function () {
	return {
		restrict : 'A',
		template : '<div class="hover">{{hoverText}}</div>',
		link : function ($scope, $element, $attrs) {
			console.log($element);
		}
	}
})