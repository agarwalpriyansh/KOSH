const express = require('express');
const app = express();

const mongoose = require('mongoose');

const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/index');

const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config();

const cookieParser = require('cookie-parser');
const path = require('path');

const db = require('./config/mongoose-connection');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(flash());
app.use('/', indexRouter);
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
