const mongoose = require('mongoose');
const comment = require('./comment')
const postSchema = mongoose.Schema({
    userId:{
        type:String
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
        type:String,
        require:true 

    },
    createdAt:{
        type:Date
    },
    updatedAt:{
        type:Date
    },

    comment:[comment.schema]
})


var Post = module.exports = Post = mongoose.model('Post', postSchema)