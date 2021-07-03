const mongoose =require("mongoose");

const postSchema = new mongoose.Schema({
    title:{type: String, required:true},
    image:{type:String,required:false},
    html:{type:String},
    secondImg:{type:String,required:false},
    description:{type:String}
});

module.exports = post = mongoose.model("post",postSchema);
