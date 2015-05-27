/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var w = require('wrench'),
	fs = require('fs');

module.exports = {
	createProject : function (req) {
		console.log(cwd());
	},
	getFileList : function  () {
		
	},
	action : function (type, args) {
		this[type](args);
	},
	save : function (args) {
		
	},
	load : function (args) {
		
	},
	deletefile : function (args) {
		
	},
	createfile : function (args) {
		
	}
};

