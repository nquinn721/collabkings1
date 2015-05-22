/**
 * IndexController
 *
 * @description :: Server-side logic for managing index
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var wrench = require('wrench');
 

module.exports = {
	index : function (req, res) {
		// Get list of files in javascript directory
		var files = wrench.readdirSyncRecursive(process.cwd() + '/assets/js/');
		
		files = files.map(function (v) {
			if(v.match('.js'))
				return v.replace('\\\\' , '\\');
		}).filter(function(v){return v !== undefined;});
		
		res.view('index', {jsFiles : files});
	}
};
