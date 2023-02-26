let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let businessContactController = require('../controllers/businessContact');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to our businessContact model
let businessContact = require('../model/businessContacts.js');

//GET ROUTE for the businessContact list page - READ OPERATION
router.get('/',businessContactController.displayBusinessContactList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,businessContactController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,businessContactController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',requireAuth,businessContactController.displayEditPage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',requireAuth,businessContactController.processEditPage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,businessContactController.performDelete);
module.exports = router;