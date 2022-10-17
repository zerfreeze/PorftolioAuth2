let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage); 
/* GET home page. */
router.get('/home', indexController.displayHomePage); 
/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);
/* GET products page. */
router.get('/products', indexController.displayProductsPage);
/* GET Services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Router for displaying the login page*/
router.get('/login', bookController.displayLoginPage);
/* POST Router for processing the Login Page*/
router.post('/login', bookController.processLoginPage);

/* GET Router for displaying register Page*/
router.get('/register', bookController.displayRegisterPage);

/* POST Router for processing the register Page*/
router.post('/register', bookController.processRegisterPage);

/* GET Router for processing the Login Page*/
router.get('/logout', bookController.performDelete);

module.exports = router;