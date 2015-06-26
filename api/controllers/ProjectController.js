/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var w = require('wrench'),
	fs = require('fs'),
	_ = require('underscore'); 

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
		for(var i = 0; i < files.length; i++)
			if(files[i].match(/\.DS_Store/))
				files.splice(i, 1);
		res.send(files);
	},

	action : function (req, res) {
		var action = req.route.path.replace('/', ''),
			url = req.param('url');

		this[action](url);
	},
	savefile : function (data) {
		console.log('save file');
	},
	loadfile : function (data) {
		
		console.log('load file');
	},
	deletefile : function (data) {
		console.log('delete file');
		
	},
	createfile : function (url) {
		fs.writeFile(this.project + url, '', function (err) {
			if(err)
				console.log(err);
			else
				sails.io.emit('newfile', url);
		});
		
	},
	setProject : function (req) {
		this.project = this.projects + '/' + req.session.user.username;
	}
};

