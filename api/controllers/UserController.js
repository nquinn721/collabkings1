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
	status : function (req, res) {
		
	}
};

