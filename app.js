const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
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


app.listen(port, () => {
    console.log(`servidor levantado en http://localhost:${port}`);
    }
);