var express = require('express');
var router = express.Router();
const Message = require('../modules/message');
const User = require('../modules/users');

/*post message */
router.post('/:reqId/:resId/send', function(req, res, next) {
    var reqId = req.params.reqId,
        resId   = req.params.resId;

    User.find({}, (err, users)=>{
          if (err) {
            res.json({success:false, errMSG:err.message})
          }else{
              users.forEach((user)=>{
                if(user._id == resId){
                  var userResMessages = [] = user.resMessages;
                  userResMessages.push(reqId);
                  user.save();
                }else if(user._id == reqId){
                  var userReqMessages = [] = user.userReqMessages;
                  var u = userReqMessages.find((reqId)=>{return reqId === reqId});
                  if (u) {
                    friends.push(u);
                    user.friendRequest.forEach((item)=>{
                      if (item == id2) {
                        for (let i = 0; i < friendsReq.length; i++) {
                          const e = friendsReq[i]
                          if(e === id2){
                            friendsReq.splice(i, 1);
                              break;
                              }// end if
                          } // end for 
                        user.save((err)=>{
                          if (err) {
                            res.json({success:false, errMSG:err.message})
                          }else{
                            res.json({success:true, MSG:'accepted'});
                          }
                        })
                      }
                    }) 
              }
                }
              })
          }
        })
})// post send message
module.exports = router;
