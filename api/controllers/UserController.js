/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getUser : function (req, res) {
		if(req.session.user)
			res.send(req.session.user);
		else res.send(false);
	},
	getAllUsers : function (req, res) {
		// console.log(sails.io.clients(req.session.user.username))
		// console.log(sails.io);
		res.send('clients');
	},
	joinRoom : function (req, res) {
		req.socket.join('roomName');
		// sails.io.join(req.session.user.username);
	},
	status : function (req, res) {
		
	}
};

