const router =require("express").Router();
const path=require("path");


const topPost = require("../models/TopPostModel");

  router.post("/", async (req, res) => {
    const newPost = new topPost(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async (req,res)=>{
    const topPosts= await topPost.find();
    res.json(topPosts);
});

router.get("/:id",async (req,res)=>{
  const top = await topPost.findById(req.params.id);
  res.json(top);
});

module.exports =router;