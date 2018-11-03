const express = require('express');
      router = express.Router(),
      Post = require('../modules/post'),
      User = require('../modules/users');
// post replay
router.post('/:id/:comentID', (req, res, next)=>{
    var quary     = req.params.id,
        commentID = req.params.comentID,
        username  = req.body.username,
        userId    = req.body.userId,
        body      = req.body.body;
        userImage     = req.body.userImage;
    Post.findById(quary, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comment.forEach(comment => {
                if (comment._id == commentID) {
                    comment.replay.push({
                        body     :body,
                        username :username,
                        userImage:userImage,
                        userId   :userId,
                        createdAt:Date.now()
                    })
                    post.save((err)=>{
                        if (err) {
                            res.json({success:false, errMSG:err.message})
                        }else{
                            res.json({success:true, comment:comment})
                        }
                    }) // post save
                } // if
            }) // post comment forEach
        }// else
    }) //find
})// post replay


// edit replay
router.post('/:postId/:comentId/:replayId/edit', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.comentId,
        replayId  = req.params.replayId,
        body      = req.body.body;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comment.forEach(comment => {
                if (comment._id == commentId) {
                    comment.replay.forEach(replay => {
                        if (replay._id == replayId) {
                            replay.body = body,
                            replay.updatedAt = Date.now();
                            post.save((err)=>{
                                if (err) {
                                    res.json({success:false, errMSG:err.message})
                                }else{
                                    res.json({success:true, MSG:'edit saved'})
                                }
                            }) // post save
                        } // if
                    }) // commend replay comment
                }// if
            }) // post comment for each
        } // else
    }) // Post findById
})// edit replay

// removereplay
router.get('/:postId/:commentId/:replayId/remove', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.commentId,
        replayId  = req.params.replayId;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comment.forEach(comment => {
                if (comment._id == commentId) {
                    comment.replay.forEach((replay)=>{
                        if (replay._id == replayId) {
                            replay.remove();
                            post.save((err)=>{
                                if (err) {
                                    res.json({success:false, errMSG:err.message})
                                }else{
                                    res.json({success:true, MSG:'removed success'})
                                }
                            }) //post save
                        } // if
                    }) // comment replayComment forEach
                }//  if
            }) // post comment forEach
        } // else 
    }) //post fing by id
})// remove replay
module.exports = router;