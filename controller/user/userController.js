const User = require('../../model/userSchema');


const loadHomepage = async (req,res) => {
    try {
        return res.render('user/home')
    } catch (error) {
        console.log('Home page not found');
        res.status(500).send('Server error')
    }
}

const loadSignuppage = async (req,res) => {
    try {
        return res.render('user/signupPage');
    } catch (error) {
        console.log('Signup page not found');
        res.status(500).send('Server not found')
    }
}

const signup = async (req,res) => {
    const {name,email,phone,password} = req.body;
    try {
        const newUser = new User({name,email,phone,password});
        console.log(newUser);

        await newUser.save();
        return res.redirect('/signup');

    } catch (error) {
        console.error("Error for save user",error);
        res.status(500).send('Internal server error');
    }
}

const loadLoginpage = async (req,res) => {
    try {
        return res.render('user/userLogin');
    } catch (error) {
        console.log('User login page not found');
        res.status(500).send('Server not found')
    }
}

module.exports = {
    loadHomepage,
    loadLoginpage,
    loadSignuppage,
    signup
}