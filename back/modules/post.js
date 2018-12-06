const mongoose = require('mongoose');
const comment = require('./comment')



const like = mongoose.Schema({
    username:{
        type:String,
        required:[true ,'username is requiered']
    },
    userId:{
        type:String,
        required:[true ,'username is requiered']
    },
    userImage:{
        type:String,
        required:[true , 'username is requiered']
    }
})


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

    comment:[comment.schema],
    likes:[like],
    spictailLike:{
        type: Boolean,
        default:false
    }
})


var Post = module.exports = Post = mongoose.model('Post', postSchema)