const express = require('express');
      router = express.Router(),
      Post = require('../modules/post'),
      User = require('../modules/users');

// get post by id
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Post.findById(id, (err, post)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, post:post})
        }
    })// end find
})// get post by id

router.get('/:userId/posts', function(req, res, next) {
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
                                    var allComments = [] = x.comment;
                                    var z           = allComments.slice(-1)
                                    var l           = {
                                        body          :x.body,
                                        _id           :x._id,
                                        userId        :x.userId,
                                        username      :x.username,
                                        userId        :x.userId,
                                        userImage     :x.userImage,
                                        createdAt     :x.createdAt,
                                        comment       :z,
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

                                    var z = allComments.slice(-1);
                                    var l           = {
                                        body          :x.body,
                                        _id           :x._id,
                                        userId        :x.userId,
                                        username      :x.username,
                                        userId        :x.userId,
                                        userImage     :x.userImage,
                                        createdAt     :x.createdAt,
                                        comment       :z,
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
// router.post('/addText', (req, res, next)=>{
//     const   userId    = req.body.userId,
//             username  = req.body.username,
//             userImage = req.body.userImage,
//             body      = req.body.body,
//             newPost   = Post({
//                 body     :body,
//                 username :username,
//                 userId   :userId,
//                 userImage:userImage,
//                 createdAt:Date.now()
//             })
//     Post.create(newPost, (err, post)=>{
//         if (err) {
//             res.json({success:false, errMSG:err.message})
//         }else{
//             res.json({success:true, MSG:'posted'})

//             // User.find({}, (err, users)=>{
//             //     if (err) {
//             //         res.json({success:false, errMSG:err.message})
//             //     }else{
//             //         let user = users.find((user)=>{return user._id == userId})

//             //         for (const id of user.friends) {
//             //             let friend = users.find((friend)=>{ return friend._id == id; })
//             //             let notifications = {
//             //                 username:username,
//             //                 userImage:userImage,
//             //                 body:username + 'have been add new post'
//             //             }
//             //             friend.notifications.push(notifications)
//             //             friend.save(err=>{
//             //                 if(err){
//             //                     res.json({success:false, errMSG:err.message})
//             //                 }else{
//             //                     res.json({success:true, MSG:'posted'})
//             //                 }
//             //             })
//             //         }

//             //     }
//             // })
//         }
//     })
// })// add post
// edit post
router.post('/:postId/edit', (req, res, next)=>{
    var id   = req.params.postId,
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
router.get('/:postId/remove', (req, res, next)=>{
    let id = req.params.postId;
    Post.findByIdAndRemove(id, (err)=>{
        if (err) {
            res.json({success:false, errMSG:err.message})
        }else{
            res.json({success:true, MSG:'removed success'})
        }
    })
})// remove post
module.exports = router;