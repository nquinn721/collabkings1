/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getUser : function (req, res) {
		User.findOne(req.param('id'))
			.then(function (model) {
				res.send(model.username);
			})
			.fail(function () {
				res.send(404);
			});
	},
	login : function  () {
		
	}
};

