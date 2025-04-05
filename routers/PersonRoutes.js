const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.get('/',async(req,res)=>{
    try {
        const responce = await Person.find();
        console.log("data fatching");
        res.status(200).json(responce);
    } catch (error) {
        console.log("error find",err);
        res.status(500).json({error:"Internal server error"}) 
    }
})


router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const responce = await newPerson.save();
        console.log("data saved successfully");
        res.status(200).json(responce);
    }catch(err){
        console.log("error find",err);
        res.status(500).json({error:"Internal server error"})
    }

})


router.get('/:workType',async(req,res)=>{
    try {
        const worktype = req.params.workType;
        if (worktype=='chef' || worktype == 'waiter' || worktype == 'manager') {
            const responce = await Person.find({work:worktype});
            res.status(200).json(responce);
        }else{
            res.status(400).json("invalid worktype")
        }
    } catch (error) {
        console.log("error saving",error);
        res.status(500).json({error:'Internal server error'});
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const updatedPersondata = req.body;

        const responce = await Person.findByIdAndUpdate(personId,updatedPersondata,{
            new :true,
            runValidators:true,
        })
        if (!responce) {
            res.status(404).json({error:'person not found'});
        }
        console.log('data update');
        res.status(200).json(responce);
    } catch (error) {
        console.log("error saving",error);
        res.status(500).json({error:'Internal server error'});
    }
})

router.delete('/:id',async(req,res)=>{
   try {
    const personId = req.params.id;
    const responce = await Person.findByIdAndDelete(personId);
    if (!responce) {
        res.status(404).json({error:'person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message:"data deleted successfully"});
   } catch (error) {
    console.log("error saving",error);
    res.status(500).json({error:'Internal server error'});
   }
})
module.exports = router;