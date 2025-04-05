const mongoose = require('mongoose')
const personSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            emum:['chef','waiter','manager'],
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match:/.+\@.+\..+/ 
        },
        address:{
            type:String,

        },
        salary:{
            type:Number
        }


    }
)
const Person = mongoose.model('Person',personSchema);
module.exports = Person;