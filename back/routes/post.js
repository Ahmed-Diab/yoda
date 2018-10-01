const express = require('express');
const router = express.Router();
const Post = require('../modules/post')
const User = require('../modules/users')
router.get('/:userId', function(req, res, next) {
    var userId = req.params.userId;
    Post.find({"userId":userId}, (err, posts)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, posts:posts})

        }
    })
})// get user posts
// get user dashbord posts
router.get('/:userId/user', function(req, res, next) {
    var userId = req.params.userId;
    User.findById(userId, (err, user)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            var t = [];
            var comments = []

                Post.find({}, (err, posts)=>{
                    var friends = user.friends;
                    if (err) {
                        res.json({success:false, errMSG:err.message})
                    }else{
                        // for (const comm of posts.comments) {
                        //     var y = {
                        //         replayComment:comm.replayComment,
                        //         _id:comm._id,
                        //         userId:comm.userId,
                        //         body:comm.body,
                        //         user:comm.user,
                        //         postId:comm.postId,
                        //         userImage:comm.userImage,
                        //         createdAt:comm.createdAt,
                        //         updatedAt:comm.updatedAt
                        //     }
                            // comment.push(y)   
                        //  console.log("common",comm.length)
                        // }
                        for (const x of posts) {
                           if (x.userId === userId) {
                            var allComments = [] = x.comments
                            var z = allComments.slice(-1)
                            var l = {
                                body     :x.body,
                                _id      :x._id,
                                userId   :x.userId,
                                user     :x.user,
                                userId   :x.userId,
                                userImage:x.userImage,
                                createdAt:x.createdAt,
                                comments :z,
                                commentsLength:allComments.length
                            }
                            t.push(l);
                           }
                        }
                        for (const post of posts) {
                            for (const i of friends) {
                                if (post.userId === i) {
                                    var allComments = [] = post.comments
                                    var z = allComments.slice(-1)
                                    var l = {
                                        body     :post.body,
                                        _id      :post._id,
                                        userId   :post.userId,
                                        user     :post.user,
                                        userId   :post.userId,
                                        userImage:post.userImage,
                                        createdAt:post.createdAt,
                                        comments :z,
                                        commentsLength:allComments.length

                                    }
                                    t.push(l);
                                }
                            }
                        }
                        // var arr = [];
                        // for (const i of t) {
                        //     console.log("comments => ",i.comments)
                        //     var l = {
                        //         body:i.body,
                        //         _id:i._id,
                        //         userId:i.userId,
                        //         user:i.user,
                        //         userId:i.userId,
                        //         userImage:i.userImage,
                        //         createdAt:i.createdAt,
                        //         comments:m
                        //     }
                        //     arr.push(l)
                        // }
                        res.json({success:true, posts:t})

                    }
            })
        }
    })
})// get user posts
// add post
router.post('/addText', (req, res, next)=>{
        var user = req.body.user,
            body = req.body.body,
            userId = req.body.userId,
            userImage = req.body.image;
        const newPost = Post({
            body:body,
            user:user,
            userId:userId,
            userImage:userImage,
            createdAt:Date.now()
        })
        Post.create(newPost, (err, post)=>{
            if (err) {
                res.json({success:false, errMSG:err.message})
            }else{
                res.json({success:true, MSG:'posted'})
            }
        })
})// add post
// edit post
router.post('/addText/:id/edit', (req, res, next)=>{
    var id = req.params.id,
        body = req.body.body;
    Post.findByIdAndUpdate(id, {
        body:body,
        updatedAt:Date.now()

    }, (err)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, MSG:'updated'})
        }
    })
})// edit post

// remove post
router.get('/addText/:id/remove', (req, res, next)=>{
    let id = req.params.id;
    Post.findByIdAndRemove(id, (err)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, MSG:'removed success'})
        }
    })
})// remove post

// post comment
router.post('/:id/comment', (req, res, next)=>{
    var quary = req.params.id,
        body  = req.body.body,
        user  = req.body.user,
        userId = req.body.userId,
        userImage = req.body.image
    Post.findByIdAndUpdate(quary, {
        $push:{"comments":{userId:userId, body:body, user:user, postId:quary, userImage:userImage, createdAt:Date.now()}}
    }, {save:true, upsert:true, new:true}, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, comments:post.comments})
        }
    })
})// post comment
// edit comment
router.post('/:postId/:commentId/comment/edit', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.commentId,
        body      = req.body.body;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comments.forEach(comment => {
                if (comment._id == commentId) {
                    comment.body = body,
                    comment.updatedAt = Date.now();
                    post.save((err, po)=>{
                        if (err) {
                            res.json({success:false, errMSG:err.message})
                        }else{
                            res.json({success:true, MSG:'edit saved'})
                        }
                    })
                }

            })
        }
    })
})// edit comment

//remove comment
router.get('/:postId/:commentId/comment/remove', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.commentId;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comments.forEach(comment => {
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

// post replay
router.post('/:id/:comentID/replay', (req, res, next)=>{
    var quary = req.params.id,
        commentID = req.params.comentID,
        user = req.body.user,
        userId = req.body.userId,
        body = req.body.body;
        image = req.body.image;
    Post.findById(quary, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comments.forEach(comment => {
                if (comment._id == commentID) {
                    comment.replayComment.push({
                        body:body,
                        user:user,
                        userImage:image,
                        userId:userId,
                        createdAt:Date.now()
                    })
                    post.save((err, pos)=>{
                        if (err) {
                            res.json({success:false, errMSG:err.message})
                        }else{
                            res.json({success:true, comment:comment})
                        }
                    })
                }
            });
        }
    })
})// post replay

// edit replay
router.post('/:postId/:comentId/:replayId/replay/edit', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.comentId,
        replayId  = req.params.replayId,
        body      = req.body.body;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comments.forEach(comment => {
                if (comment._id == commentId) {
                    comment.replayComment.forEach(replay => {
                        if (replay._id == replayId) {
                            replay.body = body,
                            replay.updatedAt = Date.now();
                            post.save((err)=>{
                                if (err) {
                                    res.json({success:false, errMSG:err.message})
                                }else{
                                    res.json({success:true, MSG:'edit saved'})
                                }
                            })
                        }
                    })
                }
            });
        }
    })
})// edit replay

// removereplay
router.get('/:postId/:commentId/:replayId/replay/remove', (req, res, next)=>{
    var postId    = req.params.postId,
        commentId = req.params.commentId,
        replayId = req.params.replayId;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            post.comments.forEach(comment => {
                if (comment._id == commentId) {
                    comment.replayComment.forEach((replay)=>{
                        if (replay._id == replayId) {
                            replay.remove();
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
        }
    })
})// remove replay
router.get('/:id/all/comment', (req, res, next)=>{
    let postId = req.params.id;
    Post.findById(postId, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            var t = post.comments
            res.json({success:true, comment:t})
        }
    })
})
module.exports = router;
