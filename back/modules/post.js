const mongoose = require('mongoose');
const comment = require('./comment')
const postSchema = mongoose.Schema({
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },
    userId:{
        type:String
    },
    user:{
        type:String,
        require:true
    },
    userImage:{
        type:String,
        require:true 
    },
    body:{
        type:String,
        require:true 

    },
    comments:[comment.schema]
})


var Post = module.exports = Post = mongoose.model('Post', postSchema)