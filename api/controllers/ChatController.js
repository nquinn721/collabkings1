/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	message : function (req, res) {
		var io = sails.io;
		console.log(req.allParams());
		
		io.emit('chatmessage', req.allParams());
		
	}
};

