let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let BusinessContact = require('../model/businessContacts.js');
module.exports.displayBusinessContactList = (req,res,next)=>{
    
    
        BusinessContact.find((err,businessContactList)=>{
            if(err)
            {
            return console.error(err);
            }
            else
            {
             
             res.render('businessContact/list', 
             {title:'BusinessContacts', BusinessContactList:businessContactList,
            displayName:req.user ? req.user.displayName:''});
            }
        }).sort({name: 'asc'});
        
    

}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('businessContact/add',{title:'Add BusinessContact',
    displayName:req.user ? req.user.displayName:''})

}

module.exports.processAddPage = (req,res,next)=>{
    let newBusinessContact = BusinessContact({
        "name": req.body.name,
        "number":req.body.number,
        "email":req.body.email
    });
    BusinessContact.create(newBusinessContact,(err,BusinessContact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/businessContactList');
        }
    });
    }
    
module.exports.displayEditPage = (req,res,next)=>{
            let id = req.params.id;
            BusinessContact.findById(id,(err,businessContactToEdit)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('businessContact/edit',{title:'Edit BusinessContact', businessContact: businessContactToEdit,
                    displayName:req.user ? req.user.displayName:''});
                }
            
            });
}

module.exports.processEditPage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedBusinessContact = BusinessContact({
                "_id":id,
                "name":req.body.name,
                "number":req.body.number,
                "email":req.body.email
            });
            BusinessContact.updateOne({_id:id}, updatedBusinessContact,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/businessContactList');
                }
            });
}

module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            BusinessContact.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/businessContactList');
                }
                
            });
}
        