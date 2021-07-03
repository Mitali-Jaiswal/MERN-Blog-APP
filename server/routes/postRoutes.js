const router =require("express").Router();

  const post = require("../models/postModel");


  router.post("/", async (req, res) => {
    const newPost = new post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async (req,res)=>{
    const posts= await post.find();
    res.json(posts);
});


router.get("/:id",async (req,res)=>{
  const pos = await post.findById(req.params.id);
  res.json(pos);
});


module.exports =router;




// const multer = require ("multer") ;
// const path=require("path");


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
      
//     },
//     filename: function(req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });
//   const upload=multer({storage:storage});
