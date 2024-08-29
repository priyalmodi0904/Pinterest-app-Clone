var express = require('express');
var router = express.Router();
const userModel=require('./users')
const passport=require("passport");
const localStrategy= require('passport-local');
const bodyParser = require('body-parser');

passport.use(new localStrategy(userModel.authenticate()));



router.get('/register', function(req, res, next) {
  res.render('register');    // to show register.ejs on / route
});
router.get('/', function(req, res, next) {
  res.render('index');    // to show index.ejs on / route   login screen
});
router.get('/profile',  function(req, res, next) {
  res.render('profile');    // to show profile.ejs on / route
});




router.post('/register', function(req, res, next) {   //after submitting the registration form
 const data= new userModel({

        name: req.body.Name,
        email: req.body.Email,
       
    });
    res.redirect("/")
})

//     username: req.body.Username,        //database se jo username aara h mtlb user.js se vo req.body me server ki side se jo data aara h mtlb register.ejs me name ki value               
    
//     //write all the input field of the formby the name value in register.ejs file

   
//     email:req.body.Email
//    // password: req.body.Password

//  })
// userModel.register(data, req.body.password)
// .then(function(){
//   passport.authenticate("local")(req,res, function(){
//     res.redirect("/profile")
//   })
// })
// .catch(next);

 



router.post('/login',  function(req, res, next) {   
  res.redirect("/profile")//after submitting the registration form
  
 
 });

 router.get("/logout",function(req,res,next){

    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
}




module.exports = router;
