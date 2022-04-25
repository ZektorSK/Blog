const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    postId:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    edited:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Comment_Posts', commentSchema);