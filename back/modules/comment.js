const mongoose = require('mongoose');
const replayComment = mongoose.Schema({
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },
    user:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    },
    userImage:{
        type:String,
        require:true
    },
    postId:{
        type:String,
        require:true
    },
    commentId:{
        type:String,
        require:true
    },
    body:{
        type:String
    }
})
const commentSchema = mongoose.Schema({
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },
    user:{
        type:String,
        require:true
    },
    userId:{
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
    postId:{
        type:String,
        require:true
    },
    replayComment:[replayComment]

})
commentSchema.pre('update', (next)=>{
    this._update = {'$set':{updatedAt:Date.now()}}
    next();
})

var Comment = module.exports = mongoose.model('Comment', commentSchema)