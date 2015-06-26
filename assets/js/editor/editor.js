CK.directive('editor', function ($rootScope, $timeout) {
	return {
		restrict : 'E',
		templateUrl : 'templates/editor.html',
		replace : true,
		link : function ($scope, $element, $attrs) { 
			var editor = CodeMirror.fromTextArea($element[0], {
					mode: "javascript",
					styleActiveLine: true,
					lineNumbers: true,
					lineWrapping: true,
					theme : 'monokai',
					indentUnit : 4
				}),
				fromSocket;

			editor.on('change', function (e, data) {
				if(!fromSocket)
					io.socket.get('/editorupdate', {
						data : data
					});
				else fromSocket = false;
			});

			io.socket.on('editorupdate', function (data) {
				var data = data.data;
				fromSocket = true;
				editor.replaceRange(data.text, data.from, data.to);
			});
		}
	}
})


