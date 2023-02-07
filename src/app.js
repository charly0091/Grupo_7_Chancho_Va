const express = require('express');
const app = express();
const port= process.env.PORT || 3000; 
const path = require('path');
const methodOverride =  require('method-override');

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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



/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
    }
);

//app get a la ruta login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/login.html'));
    }
);

app.get('/detalleProducto', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/detalleProducto.html'));
    }
);

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/carrito.html'));
    }
);

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/register.html'));
    }
);

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/about.html'));
    }
);

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/terms.html'));
    }
);

app.get('/help', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/help.html'));
    }
);

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/contact.html'));
    }
);

app.get('/reset-password', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/reset-password.html'));
    }
);

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/ofertas.html'));
    }
);

app.get('/construccion', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/construccion.html'));
    }
); */

app.listen(port, () => {
    console.log(`servidor levantado en http://localhost:${port}`);
    }
);