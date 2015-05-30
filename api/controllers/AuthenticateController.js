/**
 * AuthenticateController
 *
 * @description :: Server-side logic for managing authenticates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login : function (req, res) {
		var username = req.param('username'),
			password = req.param('password');

		User.findOne({username : username, password : password}).then(function (user){
			if(!user){
				flash.error(req, 'Incorrect Credentials');
				res.redirect('/');
				return;
			}

			delete user.password;
			req.session.user = user;
			req.session.authenticated = true;

			sails.controllers.project.createProject(req);

			res.redirect('editor');

		}).fail(function (err) {
			console.log(err);
		});
			
	},
	logout : function  (req, res) {
		req.session.destroy();
		res.redirect('/');
	}
};

