let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our book model
let Book = require('../model/books');
//GET ROUTE for the book list page - READ OPERATION
router.get('/',(req,res,next)=>{
    Book.find((err,bookList)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(BookList);
         res.render('book', {title:'Books', BookList:bookList});
        }
    });
});

/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',(req,res,next)=>{

});
/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',(req,res,next)=>{

});

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',(req,res,next)=>{

});
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',(req,res,next)=>{

});
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',(req,res,next)=>{

});
module.exports = router;