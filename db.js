const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('connected',()=> console.log("connection establised with mongodb")
)
db.on("error", (err)=> console.log("error",err)
)
db.on('disconnected',()=> console.log("mongodbdisconnected")
)

module.exports=db;