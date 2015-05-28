/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var w = require('wrench'),
	fs = require('fs'); 

module.exports = {
	projects : process.cwd() + '/projects',
	project : '', // Current session user project
	createProject : function (req, res) {
		this.setProject(req);
		if(!fs.existsSync(this.project))
			fs.mkdir(project);
	},
	getFileList : function  (req, res) {
		this.setProject(req);
		var files = w.readdirSyncRecursive(this.project);
		res.send(files);
	},
	action : function (type, args) {
		this[type](args);
	},
	save : function (req, res) {
		
	},
	load : function (req, res) {
		
	},
	deletefile : function (req, res) {
		
	},
	createfile : function (req, res) {
		
	},
	setProject : function (req) {
		this.project = this.projects + '/' + req.session.user.username;
	}
};

