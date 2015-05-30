CK.factory('showClickAndHide', function  () {
	return function ($el) {
		$el.addClass('clicked');
		setTimeout(function () {
			$el.parents('.clickandhide').addClass('none');
			$el.removeClass('clicked');
		}, 200);
	}
});