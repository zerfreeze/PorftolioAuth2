let express = require('express');
let router = express.Router();
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