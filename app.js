const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.send('Holis Veronikos');
    }
);

//app get a la ruta login.html
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/login.html'));
    }
);

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname , '/views/register.html'));
    }
);


app.listen(port, () => {
    console.log(`servidor levantado en http://localhost:${port}`);
    }
);



