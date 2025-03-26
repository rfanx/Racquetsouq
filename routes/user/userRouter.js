const express = require('express');
const router = express.Router();
const userController = require('../../controller/user/userController');



// Route for rendering the home page
router.get('/home',userController.loadHomepage);


// Route for rendering the signup page
router.get('/signup',userController.loadSignuppage);
router.post('/signup',userController.signup);

// Route for rendering the login page
router.get('/login',userController.loadLoginpage);
router.post('/login',userController.login);


module.exports = router;