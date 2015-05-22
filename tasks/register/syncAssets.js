module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		// 'less:dev',
		'sync:dev',
		'stylus:dev',
		'coffee:dev',
		'jade:dev'
	]);
};
