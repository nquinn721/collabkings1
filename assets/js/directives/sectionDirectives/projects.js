CK.directive('projects', function ($http) {
	return {   
		restrict : 'E',
		templateUrl : 'templates/projects.html',
		replace : true,
		link : function ($scope, $el, $attr) {
			$scope.files = [];

			$http.get('filelist').success(function(files){
				for(var i = 0; i < files.length; i++){
					var f = files[i],
						list = f.split('/'),
						obj = {
							type : f.indexOf('\.') > -1 ? 'file' : 'folder',
							name : list.slice(-1)[0],
							path : f,
							parents : list.slice(0, -1),
							parent : list.slice(-2, -1)[0]
						};
					$scope.files.push(obj);
				}
			});


			$scope.fileParent = function (file) {
				return file.path;
			}	
			$scope.isFile = function (a) {
				return this.file.type === 'file';
			}
		}
	}
});
