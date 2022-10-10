let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage); 

router.get('/home', indexController.displayHomePage); {
  res.render('index', { title: 'Home' });
};
router.get('/about', indexController.displayAboutPage); {
  res.render('about', { title: 'About' });
};

router.get('/Products', function(req, res, next) {
  res.render('Products', { title: 'Products' });
});

router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Books' });
});

router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});
module.exports = router;
