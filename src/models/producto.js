import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombreProducto:{
        required: true,
        type: String,
        maxlength: 100,
        unique: true
    },
    precioProducto:{
        type: Number,
        require: true
    },
    categoria:{
        required: true,
        type: String
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;