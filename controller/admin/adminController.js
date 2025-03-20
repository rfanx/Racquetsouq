


const loadAdminLogin = async (req,res) => {
    try {
        return res.render('adminLogin')
    } catch (error) {
        console.log('Admin login not found');
        res.status(500).send('Server not found')
    }
}


module.exports = {
    loadAdminLogin,
}