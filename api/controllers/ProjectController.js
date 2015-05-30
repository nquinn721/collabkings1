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
	savefile : function (req, res) {
		console.log('save file');
	},
	loadfile : function (req, res) {
		
		console.log('load file');
	},
	deletefile : function (req, res) {
		console.log('delete file');
		
	},
	createfile : function (req, res) {
		console.log('create file');
		
	},
	setProject : function (req) {
		this.project = this.projects + '/' + req.session.user.username;
	}
};

