const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv').config();
const db = require('./config/db');
const userRouter = require('./routes/user/userRouter');
const adminRouter = require('./routes/admin/adminRouter');
db();

// Middelwares
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

// View Engine
app.set('view engine','ejs');
app.set('views', [path.join(__dirname,'views/user'),path.join(__dirname,'views/admin')]);
app.use(express.static(path.join(__dirname,'public')))


app.use('/',userRouter);
app.use('/admin',adminRouter);

const PORT = 2000 || process.env.PORT
app.listen(PORT, () => {
    console.log('Server Running');
})


module.exports = app;