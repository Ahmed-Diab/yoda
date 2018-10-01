const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// var profile = mongoose.Schema({
//   quote:{
//     type:String
//   },
//   work:{
//     type:Array
//   },
//   education:{
//     type:Array
//   }
// })
var message = mongoose.Schema({
  userId:{
    type:String
  },
  userImage:{ 
    type:String
   },
  message:{
    type:Array
  }
})
var newUser = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    image:{
      type:String,
      require:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    friends:{
      type:Array
    },
    holdFriendRequest:{
      type:Array
    },
    friendRequest:{
      type:Array
    },
    updated_date: { 
      type: Date, 
      default: Date.now
     },
    // profile:[profile],
    messages:[message]
});

const User = module.exports = mongoose.model('User', newUser);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
  }
  
  module.exports.getUserByUsername = function(username, callback) {
    const query = {email: username}
    User.findOne(query, callback);
  }
  
  module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }


  module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }