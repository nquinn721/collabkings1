/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	id : {
	    type: 'integer',
	    autoIncrement: true
	},
  	username : {
      type : 'string',
      required : true,
      unique : true
    },
  	email : 'string',
  	firstname : 'string',
  	lastname : 'string',
    password : 'string',
    friends : 'array'
  },
   beforeCreate: function(values, next) {
    bcrypt.hash(values.password, 10, function(err, hash) {
      if (err) {
        return next(err);
      }
      values.password = hash;
      next();
    });
  }
};

