const express = require('express');
const router = express.Router();
const Menu = require('../models/MenuCard.js');
router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenu = new Menu(data);
        const responce = await newMenu.save();
        console.log("data saved successfully");
        res.status(200).json(responce);
    }catch(err){
        console.log("error find",err);
        res.status(500).json({error:"Internal server error"})
    }

})
router.get('/',async(req,res)=>{
    try {
        const data =await Menu.find();
        console.log("data getting successfully");
        res.status(200).json(data);
    } catch (error) {
        console.log("error find",error);
        res.status(500).json({error:"Internal server error"})
    }
})

module.exports=router;