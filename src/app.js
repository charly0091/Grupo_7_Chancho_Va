const express = require('express');
const app = express();
const port= process.env.PORT || 3000; 
const path = require('path');
const methodOverride =  require('method-override');
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "Chancho Va",
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
/* Template engine config */
app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Routers */
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

/* Routers Middlewares */
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);



app.listen(port, () => {
    console.log(`servidor levantado en http://localhost:${port}`);
    }
);