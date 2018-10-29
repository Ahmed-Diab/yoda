const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/keys');
const User = require('../modules/users');
var   multer = require('multer');
const fs = require('fs');
const path = require('path');

// start path to save images & rename images
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, 'user-images/')
  },
  filename: function(req, file, cd){
    let username = req.body.username
      cd(null, username.replace(/\s+/g,"-") + "-" + Date.now() + path.extname(file.originalname));
  }
})// end path to save images & rename images

// start handel multer file size and use check file type fun
const upload = multer({
   storage:storage,
   limits: {fileSize: 10000000,},
   fileFilter: function(req, file, cb){
     checkFileType(file, cb);
   }
}).single('userImage') // end handel multer file size and use check file type fun

// start check file type 
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname   = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype  = filetypes.test(file.mimetype)
  if(mimetype && extname){
    return cb(null, true);
  } else{
    cb('Error: must be image');

  }
} // end check file type 
// to varfay user


router.post('/login', (req, res, next) => {
    const user = req.body.user;
    const password = req.body.password;
    if (user.includes('@')) {
      User.getUserByEmail(user, (err, user) => {
        if(err) throw err;
        if(!user) {
          return res.json({success: false, errMSG: 'Email not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
          if(err) {
          return  res.json({success: false, errMSG: 'somthig wrong  plz try agean later'})
          }
          if(isMatch) {
            const token = jwt.sign({data: user}, config.secret, {
              expiresIn: 604800 // 1 week
            });
            res.json({
              success: true,
              token: 'JWT '+ token,
              user: {
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                image:user.image
              }// end user
            }) // end res.json
          } else {
            return res.json({success: false, errMSG: 'Wrong password'});
          }// end else
        }); // end User.comparePassword
      }); // end User.getUserByUsername
    }else{
      User.getUserByUsername(user, (err, user) => {
        if(err) throw err;
        if(!user) {
          return res.json({success: false, errMSG: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
          if(err) {
          return  res.json({success: false, errMSG: 'somthig wrong  plz try agean later'})
          }
          if(isMatch) {
            const token = jwt.sign({data: user}, config.secret, {
              expiresIn: 604800 // 1 week
            });
            res.json({
              success: true,
              token: 'JWT '+ token,
              user: {
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                image:user.image
              }// end user
            }) // end res.json
          } else {
            return res.json({success: false, errMSG: 'Wrong password'});
          }// end else
        }); // end User.comparePassword
      }); // end User.getUserByUsername
    } // get user by user name

  }); 

// registry  
router.post('/register', (req, res, next)=>{
  upload(req, res, (err) => {
    if(err instanceof multer.MulterError)  {
      return  res.json({success:false, errMSG: err.message});
    } else{
       var  password    = req.body.password,
            email       = req.body.email,
            image       = req.file.filename,
            dateOfBirth = req.body.dateOfBirth,
            username    = req.body.username,
            newUser     = new User({
            username    :username,
            password    :password,
            email       :email,
            image       :image,
            dateOfBirth :dateOfBirth
        });
      User.findOne({"email":email}, (err, user)=>{
        if (err) {
          res.json({success: false, errMSG:err.message})
        }
        if(user){
          res.json({success: false, errMSG:'this email is alredy taken'});
          return false;
        }
        if(!user){
          User.findOne({"username":req.body.username}, (err, user)=>{
            if (err) {
              res.json({success: false, errMSG:err.message})
            }
            if(user){
              res.json({success: false, errMSG:'this username is alredy taken'})
            }
            if(!user){
              User.addUser(newUser, (err)=>{
                if (err) {
                    res.json({errMSG:err.message})
                }else{
                  res.json({success: true, MSG:'now you can login'})
                }
              }) // User addUser
            }
          }) //User findOne
        } // if ! user
      }) //user find one
      } //else
    }) // upload
  })// end user post

// profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});// profile

// find users by id
router.get('/:id', (req, res, next)=>{
  var id = req.params.id;
  User.findById(id, (err, user)=>{
    if (err) {
      res.json({success:false, errMSG:err.message})
    }else{
        let data = {
          createdAt                : user.createdAt,
          dateOfBirth              : user.dateOfBirth,
          email                    : user.email,
          friends                  : user.friends,
          image                    : user.image,
          username                 : user.username,
          _id                      : user._id,
          holdAcceptFriendRequest  : user.holdAcceptFriendRequest,
          friendRequest            : user.friendRequest
        }
        res.json({success:true, user:data})
      }
  })
})// find by id 

// find all users by user name
  router.get('/find/all/:username/:id', (req, res, next)=>{
    var username = req.params.username;
    var id = req.params.id;
    User.find({}, (err, users)=>{
      if (err) {
        res.json({success:false, errMSG:err.message})
      }else{
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user._id == id) {
              users.splice(i, 1)
              break;
            }
          }
          var allUsers = [] = users.filter(item=>{
            return item.username.toLocaleLowerCase().includes(username)
          })
          res.json({success:true, allUsers:allUsers})
      }// else
    })
  })// find all users by user name

  // find users by user name
  router.get('/find/:username/:id', (req, res, next)=>{
    var username = req.params.username;
    var id = req.params.id;
    User.find({}, (err, users)=>{
      if (err) {
        res.json({success:false, errMSG:err.message})
      }else{
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user._id == id) {
              users.splice(i, 1)
              break;
            }// if
          }// for
          var u = [] = users.filter(item=>{
            return item.username.toLocaleLowerCase().includes(username)
          }) // filter
          let users_5 = [] = u.slice(0, 10);
          if (users_5.length >= 1) {
            res.json({success:true, users:users_5})
          }else{
            res.json({success:true, users:false})
          }
      }// else
    }) // users find
  })// find users by user name

// handel find users by user name
router.get('/find', (req, res, next)=>{
  var username = req.params.username;
  User.find({}, (err, users)=>{
    if (err) {
      res.json({success:false, errMSG:err.message})
    }else{
      res.json({success:true, users:[{username:'user name not found'}]})
    }
  })
})// handel find users by user name

// send friend request to user
// router.post('/:id/addToFriends', (req, res, next)=>{
  // var userId   = req.params.id,
  //     friendId = req.body.freindRequest;
  // User.find({}, (err, users)=>{
  //   if (err) {
  //     res.json({success:false, errMSG:err.message})
  //   }else{
  //     var user     = users.find((user)=>{return user._id == userId})
  //     var friend = users.find((user)=>{return user._id == friendId})
  //     if (user) {
  //       var friendRequest = [] = user.friendRequest;
  //       var allReadyFriend = friendRequest.find((item)=>{return item === friendId})
  //       if (!allReadyFriend) {
  //         user.friendRequest.push(friendId)
  //         user.save((err)=>{
  //           if (err) {
  //             res.json({success:false, errMSG:err.message})
  //           }else{
  //             if(friend){
  //               var holdAcceptFriendRequest = [] = friend.holdAcceptFriendRequest;
  //               var allReadyUser = holdAcceptFriendRequest.find((item)=>{return item === userId})
  //               if(!allReadyUser){
  //                 friend.holdAcceptFriendRequest.push(userId)
  //                 friend.save((err)=>{
  //                   if (err) {
  //                     res.json({success:false, errMSG:err.message})
  //                   }else{
  //                     res.json({success:true, MSG:"request sended"})
  //                   }
  //                 }) //friend save
  //               } // if ! all Ready User
  //               if (allReadyUser) {
  //                 res.json({success:true, MSG:"this request is sended befor"})
  //               }
  //             } // if
  //           } // else
  //         }) //user save
  //       } // if
  //       if (allReadyFriend) {
  //         res.json({success:true, MSG:"this request is sended befor"})
  //       }
  //     } // if user
  //   }// else
  // })// find
// })

// find users by id and remove from friends
router.get('/find/:userId/:friendId/unfriend', (req, res, next)=>{
  var userId   = req.params.userId;
  var friendId = req.params.friendId;
  User.find({}, (err, users)=>{
    if (err) {
      res.json({success:false, errMSG:err.message})
    }else{
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          if (user._id == userId) {
            let userFriends = [] = user.friends;
            userFriends.forEach((id)=>{
              if (id == friendId) {
                userFriends.splice(id, 1)
                user.save((err)=>{
                  if(err){
                    res.json({success:false, errMSG:err.message})
                  }else{
                    for (let o = 0; o < users.length; o++) {
                      const friend = users[o];
                      if (friend._id == friendId) {
                        let friendFriends = [] = friend.friends;
                        friendFriends.forEach((userId)=>{
                          if (userId == userId) {
                            friendFriends.splice(userId, 1);
                            friend.save(err=>{
                              if(err){
                                res.json({success:false, errMSG:err.message})
                              }else{
                                res.json({success:true, MSG:'saved'})
                              }//  els
                            })// save friend
                          }//  if
                        })//for each
                      }// if friend id
                    }// for 
                  }// else save user
                })//  user save
              }//  if
            })//   user Friends forEach
          }//  if
        }//  for
    }//  else
  })// find
})// find users by id and remove from friends

// get all friends request
// router.get('/:id/friendsRequst', (req, res, next)=>{
//   var id = req.params.id;
//   User.findById(id, (err, user)=>{
//     if (err) {
//       res.json({success:false, errMSG:err.message})
//     }else{
//       var t = []
//       User.find({}, (err, users)=>{
//         if (err) {
//           res.json({success:false, errMSG:err.message})
//         }else{
//           var friends = user.friendRequest;
//           if (friends.length >= 1) {
//               friends.forEach((friend)=>{ 
//                   var o =[]      
//                   o.push(friend)
//                   o.forEach((item)=>{
//                       users.forEach((o)=>{
//                         if (o._id == item) {
//                             t.push(o)
//                         }
//                       })
//                   })
//               })
//             }
//         }
//         res.json({success:true, friendsRequset:t})
//       })
//     }
//   })
// })// get all friends request

// cansle friends request
// router.get('/:userId/:friendId/ignnorFriendRequst', (req, res, next)=>{
//   var userId = req.params.userId,
//   friendId = req.params.friendId;
// User.find({}, (err, users)=>{
// if (err) {
//   res.json({success:false, errMSG:err.message})
// }else{
//   let user = users.find((user)=>{return user._id == userId});
//   if (user) {
//     let userFriendRequest = [] = user.friendRequest;
//     userFriendRequest.forEach((id)=>{
//       if (id == friendId) {
//         for (let i = 0; i < userFriendRequest.length; i++) {
//           const e = userFriendRequest[i]
//           if(e === friendId){
//             userFriendRequest.splice(i, 1);
//               break;
//             }// end if
//       } // end for 
//         user.save((err)=>{
//           if (err) {
//             res.json({success:false, errMSG:err.message})
//           }else{
//             let friend = users.find((friend)=>{return friend._id == friendId});
//             if (friend) {
//               let friendHoldAcceptFriendRequest = [] = friend.holdAcceptFriendRequest;
//               friendHoldAcceptFriendRequest.forEach((id)=>{
//                   if (id == userId) {
//                   for (let i = 0; i < friendHoldAcceptFriendRequest.length; i++) {
//                     const e = friendHoldAcceptFriendRequest[i]
//                     if(e === userId){
//                       friendHoldAcceptFriendRequest.splice(i, 1);
//                       break;
//                     }// end if
//                 } // end for
//                 friend.save((err)=>{
//                   if (err) {
//                     res.json({success:false, errMSG:err.message})
//                   }else{
//                     res.json({success:true, MSG:'canceld'})
//                   }// end else
//                 })// end save friend
//               }
//               }) // end for each
//             } // end if-frind
//           } // end else
//         })// end save user
//       }// end if
//     }) // end for each
//   }// end if
// }// else
// })//end find
// })// cansle friends request

// cansle friends request from sender
// router.get('/:userId/:friendId/canselRequstFromSender', (req, res, next)=>{
//   var userId = req.params.userId,
//       friendId = req.params.friendId;
//   User.find({}, (err, users)=>{
//     if (err) {
//       res.json({success:false, errMSG:err.message})
//     }else{
//       let user = users.find((user)=>{return user._id == userId});
//       if (user) {
//         let userHoldAcceptFriendRequest = [] = user.holdAcceptFriendRequest;
//         userHoldAcceptFriendRequest.forEach((id)=>{
//           if (id == friendId) {
//             for (let i = 0; i < userHoldAcceptFriendRequest.length; i++) {
//               const e = userHoldAcceptFriendRequest[i]
//               if(e === friendId){
//                 userHoldAcceptFriendRequest.splice(i, 1);
//                   break;
//                 }// end if
//           } // end for 
//             user.save((err)=>{
//               if (err) {
//                 res.json({success:false, errMSG:err.message})
//               }else{
//                 let friend = users.find((friend)=>{return friend._id == friendId});
//                 if (friend) {
//                   let friendRequest = [] = friend.friendRequest;
//                   friendRequest.forEach((id)=>{
//                     for (let i = 0; i < friendRequest.length; i++) {
//                       const e = friendRequest[i]
//                       if(e === userId){
//                         friendRequest.splice(i, 1);
//                         break;
//                       }// end if
//                   } // end for
//                   friend.save((err)=>{
//                     if (err) {
//                       res.json({success:false, errMSG:err.message})
//                     }else{
//                       res.json({success:true, MSG:'canceld'})
//                     }// end else
//                   })// end save friend
//                   }) // end for each
//                 } // end if-frind
//               } // end else
//             })// end save user
//           }// end if
//         }) // end for each
//       }// end if
//     }// else
//   })//end find
// })// cansle friends request from sender

// // accept friends request
// router.get('/:id/:reqId/acceptFriendRequst', (req, res, next)=>{
//   var id = req.params.id,
//       reqId = req.params.reqId;
//   User.find({}, (err, users)=>{
//     if (err) {
//       res.json({success:false, errMSG:err.message})
//     }else{
//         users.forEach((user)=>{
//           if(user._id == reqId){
//             var friendsId = [] = user.friends;
//             var holdAcceptFriendRequest = [] = user.holdAcceptFriendRequest;
//             friendsId.push(id);
//               holdAcceptFriendRequest.forEach((item)=>{
//                 if (item == id) {
//                   for (let i = 0; i < holdAcceptFriendRequest.length; i++) {
//                     const e = holdAcceptFriendRequest[i]
//                     if(e === id){
//                       holdAcceptFriendRequest.splice(i, 1);
//                         break;
//                         }// end if
//                     } // end for 
//                     user.save((err)=>{
//                       if (err) {
//                         res.json({success:false, errMSG:err.message})
//                       }else{
//                         var userById = users.find((o)=>{return o._id == id})
//                         if(userById){
//                           var friendsReq = [] = userById.friendRequest;
//                           var friends = [] = userById.friends;
//                           var u = friendsReq.find((requestId)=>{return requestId === reqId});
//                           if (u) {
//                             friends.push(u);
//                             userById.friendRequest.forEach((item)=>{
//                               if (item == reqId) {
//                                 for (let i = 0; i < friendsReq.length; i++) {
//                                   const e = friendsReq[i]
//                                   if(e === reqId){
//                                     friendsReq.splice(i, 1);
//                                       break;
//                                       }// end if
//                                   } // end for 
//                                   userById.save((err)=>{
//                                     if (err) {
//                                       res.json({success:false, errMSG:err.message})
//                                       }else{
//                                       res.json({success:true, MSG:'accepted'})
//                                     }
//                                   })
//                                 }
//                             }) 
//                             }
//                           }
//                       }

//                     })
//                   }

//               })
//           }
//         })
//     }
//   })
// })// accept friends request
// get user fiends
router.get('/:userId/user/friends', (req, res, next)=>{
  var userId = req.params.userId;
  User.find({}, (err, users)=>{
    if (err) {
      res.json({success:false, errMSG:err.message})
    }else{
      var friends = [];
      var user = users.find((i)=>{return i._id == userId});
      var fr = [] = user.friends;
      for (const friendId of fr) {
        var userFriendsId =  users.find((x)=>{return x._id == friendId})
       if (userFriendsId) {
         let r = {
          _id:userFriendsId._id,
           username:userFriendsId.username,
           image:userFriendsId.image
         }
          friends.push(r)
        }
      }
    }
  if(friends.length >= 1){
    res.json({success:true, userFriends:friends})
  }else{
    res.json({success:true, userFriends:null})
  }
  })
})

module.exports = router;
