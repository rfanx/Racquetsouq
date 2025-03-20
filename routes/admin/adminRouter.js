const express = require('express');
const router = express.Router();
const adminController = require('../../controller/admin/adminController');

router.get('/',adminController.loadAdminLogin);


module.exports = router;