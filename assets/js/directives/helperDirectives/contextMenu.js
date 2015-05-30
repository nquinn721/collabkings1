CK.directive('contextMenu', function ($document, createFile) {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			var cm = $('.context-menu'),
				services = {
					createFile : createFile
				}
			
			$element.on('contextmenu', function (e) {
				$scope.$parent.currentMenuItem = {
					element : $element,
					attrs : $attrs
				};

				cm.removeClass('none').css({
					left : e.pageX,
					top : e.pageY + 15
				});
				return false;
			});


			$scope.$parent.menuItemClick = function (action) {
				var self = this,
					cap = action.substr(0,1).toUpperCase() + action.substr(1);

				this['showing' + cap] = true;
				services[action].show();
				setTimeout(function () {
					self['showing' + cap] = false;
					cm.addClass('none');
					self.$digest();
				}, 300);
			}


		}
	}
})