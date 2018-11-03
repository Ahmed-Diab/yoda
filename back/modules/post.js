const mongoose = require('mongoose');
const comment = require('./comment')
const postSchema = mongoose.Schema({
    userId:{
        type:String,
        required:[true ,'plz fill all fildes']

    },
    username:{
        type:String,
        required:[true ,'plz fill all fildes']
    },
    userImage:{
        type:String,
        required:[true ,'plz fill all fildes']
    },
    body:{
        type:String,
        required:[true ,'plz fill all fildes']

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