const mongoose = require('mongoose');
// const reMessage = mongoose.Schema({
//     createdAt:{
//         type:Date
//     },
//     updatedAt:{
//         type:Date
//     },
//     user:{
//         type:String,
//         require:true
//     },
//     userId:{
//         type:String,
//         require:true
//     },
//     userImage:{
//         type:String,
//         require:true
//     },
//     body:{
//         type:String,
//         require:true
//     }
// })

const messageSchema = mongoose.Schema({
    createdAt:{
        type:Date
    },
    userId:{
        type:String
    },
    fromUsername:{
        type:String,
        require:true
    },
    fromImage:{
        type:String,
        require:true 
    },
    fromId:{
        type:String,
        require:true 
    },
    body:{
        type:String,
        require:true 
    },
    isRead:{
        type:Boolean
    }
})


var Message = module.exports = Message = mongoose.model('Message', messageSchema)