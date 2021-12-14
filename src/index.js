import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes/producto.routes';
import './database';


// instanciar express
const app = express();
// crear un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=> {
  
  console.log('Estoy en el puerto ' + app.get('port'))
  console.log(path.join(__dirname, '../public'));
});

//configuraciones extras midlewares
app.use(morgan('dev')); // nos da info en la consola del status de la peticion
app.use(cors()); //nos permite recibir peticiones remotas al servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //estos dos ultimos permiten recibir e interpretar el json de la resp

// configurar el index.html
app.use(express.static(path.join(__dirname, '../public')))

//crear rutas
app.use("/apicafeteria", router)

/* app.get('/', (req, res)=> {
  res.send('hola esta es una prueba desde el backend')
})
app.delete('/borrarproducto', (req, res)=> {
  res.send('alguien quiere borrar producto')
}) */


