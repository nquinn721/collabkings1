/**
 * IndexController
 *
 * @description :: Server-side logic for managing index
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 

module.exports = {
	editor : function (req, res) {
		res.view('editor');
	},
	index : function (req, res) {
		res.view('index');
	}
};
