const mongoose =require("mongoose");

const topSectionSchema = new mongoose.Schema({
    title:{type: String, required:true},
    image:{type:String,required:false},
    html:{type:String},
    secondImg:{type:String,required:false},
    description:{type:String}
});

module.exports = topSection = mongoose.model("topSection",topSectionSchema);