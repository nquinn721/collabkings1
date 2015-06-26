/**
 * EditorController
 *
 * @description :: Server-side logic for managing editors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	update : function (req, res) {
		req.socket.broadcast.to('roomName').emit('editorupdate', req.allParams());
	}
};

