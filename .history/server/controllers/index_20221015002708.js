let express = require('express');
let router = express.Router();
let mongoose = require ('mongoose');
let passport = require('passport');

//create the userModel instance
let UserModel = require('../model/user');
let User = userModel.user; //alias
module.exports.displayHomePage = (req,res,next)=>{
    res.render('index',{title:'Home'});
}

module.exports.displayAboutPage = (req,res,next)=>{
    res.render('about',{title:'About'});
}

module.exports.displayProductsPage = (req,res,next)=>{
    res.render('Products',{title:'Products'});
}
module.exports.displayServicesPage = (req,res,next)=>{
    res.render('Services',{title:'Services'});
}
module.exports.displayContactPage = (req,res,next)=>{
    res.render('Contact',{title:'Contact'});
}
module.exports.displayLoginPage = (req,res,next)=>{
    //check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages:req.flash('loginMessage'),
            displayName:req.user?req.user.displayName:''
        })
    }
    else
    {
      return res.redirect('/');
    }
}
module.exports.processLoginPage = (req,res.next)=>{
    passport.authenticate ('local',(err,user,info)=>{
        //server errr?
        if(!err)
        {
         return next(err);
        }
        // is there a user login error
        
    })
}