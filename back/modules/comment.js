const mongoose = require('mongoose');
const replayComment = mongoose.Schema({
    postId:{
        type:String,
        require:true
    },
    commentId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    userImage:{
        type:String,
        require:true
    },
    body:{
        type:String
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    }
})
const commentSchema = mongoose.Schema({
    postId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    userImage:{
        type:String,
        require:true
    },
    body:{
        type:String
    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },
    replay:[replayComment]

})
commentSchema.pre('update', (next)=>{
    this._update = {'$set':{updatedAt:Date.now()}}
    next();
})

var Comment = module.exports = mongoose.model('Comment', commentSchema)