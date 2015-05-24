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

		User.findOne({username : username, password : password})
			.then(function (user) {
				if(user){
					delete user.password;
					req.session.user = user;
					res.view('editor', {
						user : user
					});
				} else res.render('index', {
					error : 'Incorrect credentials'
				})
			})
			.fail(function () {
				console.log('fail');
			});
			
	}
};

