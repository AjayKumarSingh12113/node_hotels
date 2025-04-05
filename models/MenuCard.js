const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:["spicy","sweet","heavy"],
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:String,
        enum:["chicken winds","spices","sauce"],
        required:true,
    }
})
const Menu = mongoose.model('Menu',MenuSchema);
module.exports=Menu;