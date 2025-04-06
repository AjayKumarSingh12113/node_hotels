const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person.js');

passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
    try {
        const user =await Person.findOne({username:USERNAME}); // username match honge oh record user me aa jyge
        if (!user) {//agar nhi data hi nhi milata hai 
            return done(null,false,{message:'Incorect username'});
        }
        //here user is object {} usme se username check krna padega 
        //const isPasswordmatch = user.password === password ? true:false;
        const isPasswordmatch = await user.comparePassword(password);
        if (isPasswordmatch) {
            return done(null,user);
        } else {
            return done(null,false,{message:'Incorrect usernames'})
        }
    } catch (error) {
        return done(error);
    }
}))

module.exports=passport;