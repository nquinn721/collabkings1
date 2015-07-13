/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getUser : function (req, res) {
		if(req.session.user)
			res.send(req.session.user);
		else res.send(false);
	},
	getAllUsers : function (req, res) {
		// console.log(sails.io.clients(req.session.user.username))
		// console.log(sails.io);
		res.send('clients');
	},
	joinRoom : function (req, res) {
		req.socket.join('roomName');
		// sails.io.join(req.session.user.username);
	},
	status : function (req, res) {
		
	},
	addFriendRoute : function (req, res) {
		var added = this.addFriend(req, req.param('friend'));
		if(added)res.status(500).send(added);
		else res.status(200).send('', true);
	},
	removeFriendRoute : function (req, res) {
		this.removeFriend(req, req.param('friend'));	
	},

	addFriend : function (req, friend) {
		var user = req.session.user;
		if(user.friends.indexOf(friend) > -1){
			return 'Friend already added';
		}
		user.friends = user.friends ? user.friends.concat(friend) : [friend];
		this.update(req, {friends : user.friends}, this.emitUser);
	},
	removeFriend : function (req, friend) {
		var user = req.session.user;

		if(user.friends.indexOf(friend) > -1)
			user.friends.splice(user.friends.indexOf(friend), 1);

		this.update(req, {friends : user.friends}, this.emitUser);
	},
	update : function (req, obj, cb) {
		User.update({username : req.session.user.username}, obj, function (e, user) {
			User.find({username : req.session.user.username}).then(function (u) {
				console.log(u);
			})
			if(user) {
				// delete user[0].password;
				// req.session.user = user[0];
				// console.log(user[0]);
				// cb(user[0]);
			}
		});
	},
	emitUser : function (user) {
		sails.io.emit('user', user);
	}
};

