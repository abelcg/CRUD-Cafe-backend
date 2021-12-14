import mongoose from 'mongoose'

const url = 'mongodb://localhost:27017/crudcafe';

mongoose.connect(url,{useNewUrlParser: true});

//guardar la conexion
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada')
});