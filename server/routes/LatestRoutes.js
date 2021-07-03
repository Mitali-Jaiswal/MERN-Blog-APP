const router =require("express").Router();
const path=require("path");


const latest = require("../models/LatestModel");

  router.post("/", async (req, res) => {
    const newPost = new latest(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async (req,res)=>{
    const latests= await latest.find();
    res.json(latests);
});

router.get("/:id",async (req,res)=>{
  const lat = await latest.findById(req.params.id);
  res.json(lat);
});

module.exports =router;







// const multer = require("multer")

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
      
//     },
//     filename: function(req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });
//   const upload=multer({storage:storage});
