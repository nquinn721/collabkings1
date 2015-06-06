CK.directive('projects', function ($http) {
	return {   
		restrict : 'E',
		templateUrl : 'templates/projects.html',
		replace : true,
		link : function ($scope, $el, $attr) {
			var child;
			$scope.files = [];

			$http.get('filelist').success(function(files){
				for(var i = 0; i < files.length; i++)
					addFile(files[i]);
			});
			

			io.socket.on('newfile', function (file) {
				file = file.substr(1);

				if(file.substr(0, 1) === '/')file = file.substr(1);
				addFile(file);
				$scope.$digest();
			});

			$scope.fileType = function (file) {
				return file.type === 'file';
			}

			$scope.fileParent = function (file) {
				return file.path;
			}	
			$scope.isFile = function (a) {
				return this.file.type === 'file';
			}


			function addFile (file) {
				var f = file,
					list = f.split('/'),
					obj = {
						type : f.indexOf('\.') > -1 ? 'file' : 'folder',
						name : list.slice(-1)[0],
						path : f,
						parents : list.slice(0, -1),
						parent : list.slice(-2, -1)[0],
						children : []
					};

				if(obj.parents.length > 0){
					getChild($scope.files, f.split('/').slice(0, -1).join('/'), obj);
				}else{
					$scope.files.push(obj);
				}
			}
			function getChild(files, p, file){
				for(var i = 0; i < files.length; i++){
					if(files[i].path === p){
						files[i].children.push(file);
						return
					}
				}
				
				for(var i = 0; i < files.length; i++)
					if(files[i].children.length){
						getChild(files[i].children, p, file);
					}
			}
		}
	}
});
