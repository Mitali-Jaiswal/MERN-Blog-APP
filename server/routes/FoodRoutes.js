const router =require("express").Router();
const path=require("path");


const food = require("../models/FoodModel");

  router.post("/", async (req, res) => {
    const newPost = new food(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/",async (req,res)=>{
    const foods= await food.find();
    res.json(foods);
});

router.get("/:id",async (req,res)=>{
  const f = await food.findById(req.params.id);
  res.json(f);
});

module.exports =router;




