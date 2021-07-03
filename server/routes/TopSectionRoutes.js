const router =require("express").Router();
const path=require("path");


const topSection = require("../models/TopSectionModel");

  router.post("/", async (req, res) => {
    const newPost = new topSection(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async (req,res)=>{
    const topSections= await topSection.find();
    res.json(topSections);
});

router.get("/:id",async (req,res)=>{
  const top = await topSection.findById(req.params.id);
  res.json(top);
});

module.exports =router;