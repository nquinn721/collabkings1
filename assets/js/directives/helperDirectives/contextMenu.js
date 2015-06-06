CK.directive('contextMenu', function ($http, $document, createFile, $rootScope) {
	return {
		restrict : 'A',
		link : function ($scope, $element, $attrs) {
			var cm = $('.context-menu'),
				services = {
					createFile : createFile
				}
			
			$element.on('contextmenu', function (e) {
				$rootScope.currentMenuItem = {
					element : $element,
					attrs : $attrs
				};

				cm.removeClass('none').css({
					left : e.pageX - 20,
					top : e.pageY
				});
				return false;
			});

			$rootScope.createFile = function () {
				var filename = this.createFileName,
					path = $rootScope.currentMenuItem.attrs.path;

				if(path.indexOf('.') > -1)
					path = path.split('/').slice(0,-1).join('/');

				path = '/' + path;

				createFile.hide();
				this.createFileName = '';


				var obj = {url : path + '/' + filename};
				io.socket.get('/createfile', obj);
			}


			$rootScope.menuItemClick = function (action) {
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