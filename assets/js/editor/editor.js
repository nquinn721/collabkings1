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
					theme : 'monokai',
					indentUnit : 4,
					lineWrapping : false
				}),
				fromSocket,
				cursorFromSocket = true;
			
			// Create other person cursor
			$('.CodeMirror-sizer').append($('<div>', {class : 'other-person-cursor'}));
 
			editor.on('change', function (e, data) {
				if(!fromSocket)
					io.socket.get('/editorupdate', data);
				else{
					fromSocket = false;	
					cursorFromSocket = false;
				} 
			});
			editor.on('cursorActivity', function () {
				if(cursorFromSocket){
					setTimeout(function () {
						
					var pos = editor.getCursor(),
						cursor = $('.CodeMirror-cursor'),
						left = parseInt(cursor.css('left')),
						top = parseInt(cursor.css('top'));
						io.socket.get('/cursorupdate', {left : left, top : (pos.line * 15) + 3});					
					}, 10)
				}
			});

			io.socket.on('editorupdate', function (data) {
				fromSocket = true;
				editor.replaceRange(data.text, data.from, data.to);
			});
			io.socket.on('cursorupdate', function (data) {
				cursorFromSocket = true;
				$('.other-person-cursor').css(data).show();
			});
		}
	}
});


