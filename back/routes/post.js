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
    })// end find
})// get user posts


// get user dashbord posts
router.get('/:userId/user', function(req, res, next) {
    var userId = req.params.userId;
    User.findById(userId, (err, user)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            var arrPosts = [];
                Post.find({}, (err, posts)=>{
                    var friends = user.friends;
                    if (err) {
                        res.json({success:false, errMSG:err.message})
                    }else{
                        for (const x of posts) {
                            if (x.comment) {
                                if (x.userId === userId) {
                                    var allComments = [] = x.comment
                                    var z           = allComments.slice(-1)
                                    var l           = {
                                        body          :x.body,
                                        _id           :x._id,
                                        userId        :x.userId,
                                        username      :x.username,
                                        userId        :x.userId,
                                        userImage     :x.userImage,
                                        createdAt     :x.createdAt,
                                        comment      :z,
                                        commentsLength:allComments.length
                                    }
                                    arrPosts.push(l);
                                   }
                            }

                        }
                        for (const post of posts) {
                            for (const i of friends) {
                                if (post.userId === i) {
                                    var allComments = [] = post.comment
                                    var z = allComments.slice(-1)
                                    var l = {
                                        _id           :post._id,
                                        userId        :post.userId,
                                        userId        :post.userId,
                                        username      :post.username,
                                        userImage     :post.userImage,
                                        body          :post.body,
                                        createdAt     :post.createdAt,
                                        comment      :z,
                                        commentsLength:allComments.length
                                    }
                                    arrPosts.push(l);
                                }
                            }
                        }
                        res.json({success:true, posts:arrPosts})
                    }
            })
        }
    })
})// get user posts
// add post
router.post('/addText', (req, res, next)=>{
    const   userId    = req.body.userId,
            username  = req.body.username,
            userImage = req.body.userImage,
            body      = req.body.body,
            newPost   = Post({
                body     :body,
                username :username,
                userId   :userId,
                userImage:userImage,
                createdAt:Date.now()
            })
    Post.create(newPost, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, MSG:'posted'})

            // User.find({}, (err, users)=>{
            //     if (err) {
            //         res.json({success:false, errMSG:err.message})
            //     }else{
            //         let user = users.find((user)=>{return user._id == userId})

            //         for (const id of user.friends) {
            //             let friend = users.find((friend)=>{ return friend._id == id; })
            //             let notifications = {
            //                 username:username,
            //                 userImage:userImage,
            //                 body:username + 'have been add new post'
            //             }
            //             friend.notifications.push(notifications)
            //             friend.save(err=>{
            //                 if(err){
            //                     res.json({success:false, errMSG:err.message})
            //                 }else{
            //                     res.json({success:true, MSG:'posted'})
            //                 }
            //             })
            //         }

            //     }
            // })
        }
    })
})// add post
// edit post
router.post('/addText/:id/edit', (req, res, next)=>{
    var id   = req.params.id,
        body = req.body.body;
    Post.findByIdAndUpdate(id, {
        body     :body,
        updatedAt:Date.now()
    }, (err)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, MSG:'updated'})
        }
    })// end find by id
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
    var quaryId   = req.params.id,
        body      = req.body.body,
        username  = req.body.username,
        userId    = req.body.userId,
        userImage = req.body.image;
    Post.findByIdAndUpdate(quaryId, {
        $push:{"comment":{
            userId   :userId, body:body, 
            postId   :quaryId, 
            username :username, 
            userImage:userImage, 
            createdAt:Date.now()}}
    }, {save:true, upsert:true, new:true}, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, comment:post.comment})
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
router.get('/:postId/:commentId/comment/remove', (req, res, next)=>{
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

// post replay
router.post('/:id/:comentID/replay', (req, res, next)=>{
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
router.post('/:postId/:comentId/:replayId/replay/edit', (req, res, next)=>{
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
router.get('/:postId/:commentId/:replayId/replay/remove', (req, res, next)=>{
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
router.get('/:id/all/comment', (req, res, next)=>{
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
