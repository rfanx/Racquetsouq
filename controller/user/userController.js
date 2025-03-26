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
    try {
        console.log('Recived data:', req.body);

        const {firstName,lastName,email,phone,password} = req.body;
        
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({message: 'Email already exists'});
        }

        const newUser = new User({firstName,lastName,email,phone,password});

        await newUser.save();
        console.log('User saved successfully', newUser);

        return res.json({ success: true, message: 'Signup successful'});

    } catch (error) {
        console.error("Error for save user",error);
    }
};

const loadLoginpage = async (req,res) => {
    try {
        return res.render('user/userLogin');
    } catch (error) {
        console.log('User login page not found');
        res.status(500).send('Server not found')
    }
}

const login = async (req,res) => {
    
}

module.exports = {
    loadHomepage,
    loadLoginpage,
    loadSignuppage,
    signup
}