const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//set express

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.port || 3000;
app.listen(port,()=> console.log(`server started on port: ${port}`));


//set routes
app.use("/posts",require("./routes/postRoutes"));
app.use("/latests",require("./routes/LatestRoutes"));
app.use("/foods",require("./routes/FoodRoutes"));
app.use("/stories",require("./routes/StoriesRoutes"));
app.use("/topsection",require("./routes/TopSectionRoutes"));
app.use("/topPost",require("./routes/TopPostRoutes"));




// set mongoose

mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true ,
        useCreateIndex:true},
    (err)=>{
    if(err)return console.error(err);
    console.log("MongoDB Connected...!");
});

// app.use('/uploads',express.static('uploads'));

// server production assests
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join("client/build")))
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,"client","build","index.html"))
//     })
// }
