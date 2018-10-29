const express = require('express');
      router = express.Router(),
      Post = require('../modules/post'),
      User = require('../modules/users');
// old way to add new comment
// router.post('/:id/comment', (req, res, next)=>{
//     console.log(req.params.id)
//         io.sockets.emit('send test', {data: req.params.id})
    // var quaryId   = req.params.id,
    //     body      = req.body.body,
    //     username  = req.body.username,
    //     userId    = req.body.userId,
    //     userImage = req.body.image;
    // Post.findByIdAndUpdate(quaryId, {
    //     $push:{"comment":{
    //         userId   :userId, body:body, 
    //         postId   :quaryId, 
    //         username :username, 
    //         userImage:userImage, 
    //         createdAt:Date.now()}}
    // }, {save:true, upsert:true, new:true}, (err, post)=>{
    //     if (err) {
    //         res.json({success:false, errMSG:err.message})
    //     }else{
    //         res.json({success:true, comment:post.comment})
    //     }
    // })
// })// post comment
 
// edit comment
router.post('/:postId/:commentId/edit', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.commentId,
        body      = req.body.body;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comment.forEach(comment => {
                if (comment._id == commentId) {
                    comment.body      = body,
                    comment.updatedAt = Date.now();
                    post.save((err)=>{
                        if (err) {
                            res.json({success:false, errMSG:err.message})
                        }else{
                            res.json({success:true, MSG:'saved'})
                        }
                    }) // post save
                } //if
            }) // post comment
        } //else
    }) //find
})// edit comment

//remove comment
router.get('/:postId/:commentId/remove', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.commentId;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comment.forEach(comment => {
                if (comment._id == commentId) {
                    comment.remove();
                    post.save((err)=>{
                        if (err) {
                            res.json({success:false, errMSG:err.message})
                        }else{
                            res.json({success:true, MSG:'removed success'})
                        }
                    })
                }
            })
        }
    })
})// remove comment

router.get('/:id/all', (req, res, next)=>{
    let postId = req.params.id;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            var t = post.comment
            res.json({success:true, comment:t})
        }
    })
})
module.exports = router;