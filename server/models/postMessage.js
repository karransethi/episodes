import mongoose from "mongoose";


//mongoose scheema
//with mogodb we can have treat document that are absolutely different
//one can have a title and description and while one may only have a title
//with mongoose scheema it gives a uniformity
//each post will have to have these things
const postSchema=mongoose.Schema({
title: String,
message: String,
creater: String,
tags:[String],
selectedFile: String,
likeCount: {
    type: Number,
    default:0
},
createdAt: {
    type: Date,
    default: new Date(),
},
});

//mongoose model first param name second schema
//with model we can add del etc
const PostMessage = mongoose.model("PostMessage",postSchema);

export default PostMessage;
