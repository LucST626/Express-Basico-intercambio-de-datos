const express = require('express');
const app = express();
const path = require("path")

//repasar
app.use(express.static(path.join(__dirname, 'public')));

//repasar
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/query_parameters', (req, res) => {
    const clave = req.query.clave;
    console.log(clave)
    res.send(`Hola, ${clave}!`);
});

app.post('/enviar', (req, res) => {
    const mensaje = req.body.clave;
    const nombre = req.body.nombre;
    const number = req.body.numero;
    console.log(mensaje, nombre)
    res.send(`Mensaje recibido: ${mensaje} ${nombre} ${number}`);
});


app.post('/json', (req, res) => {
    const nombre = req.body.nombre
    res.send(`Hola, ${nombre}!`);
});

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuario ID: ${id}`);
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});