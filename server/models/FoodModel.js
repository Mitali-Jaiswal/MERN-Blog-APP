const mongoose =require("mongoose");


const foodSchema = new mongoose.Schema({
    title:{type: String, required:true},
    image:{type:String,required:false},
    html:{type:String},
    secondImg:{type:String,required:false},
    description:{type:String}
});

module.exports = food = mongoose.model("food",foodSchema);
