import express from 'express';

const app = express();

const port = 4000;

app.listen(port, ()=> console.log('Estoy en el puerto ' + port));

console.log('hola mundo');


