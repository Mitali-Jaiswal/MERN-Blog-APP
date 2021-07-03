const router =require("express").Router();
const path=require("path");


const stories = require("../models/StoriesModel");

  router.post("/", async (req, res) => {
    const newPost = new stories(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async (req,res)=>{
    const story= await stories.find();
    res.json(story);
});

router.get("/:id",async (req,res)=>{
  const story = await stories.findById(req.params.id);
  res.json(story);
});

module.exports =router;
