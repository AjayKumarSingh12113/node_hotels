let express = require('express');
let app = express();
const db = require('./db.js');
require('dotenv').config();
const Port = process.env.PORT || 3000;
const passport = require('./Auth.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const logRequest=(req,res,next)=>{//middle function
    //console.log(`[${new Date().toLocaleString()}] request made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);//sare le laga diya hai 

app.use(passport.initialize());
const localAuthMiddleware =passport.authenticate('local',{ session: false })
app.get('/',(req,res)=>{
    res.send("world is very beautiful");
})

const Personrouter = require('./routers/PersonRoutes.js')
app.use('/person',localAuthMiddleware,Personrouter);

const Menurouter = require('./routers/MenuRoutes.js');
app.use('/menu',Menurouter);



app.listen(Port,()=> console.log("server is start")
)



// app.get("/",(req,res)=>{
//     res.send("hello the world")
// })

// app.get("/chai",(req,res)=>{
//     res.send("we get this")
// })
// app.post('/person',(req,res)=>{
//     const data = req.body;
//     const newPerson = new Person(data);
//     newPerson.save((error,savedPerson)=>{
//         if(error){
//             console.log("error saving",error);
//             res.status(500).json({error:'Internal server error'});
//         }else{
//             console.log("data saved successfully");
//             res.status(200).json(savedPerson);
//         }
//     })
// })
