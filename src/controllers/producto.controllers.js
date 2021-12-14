import Producto from "../models/producto"

const productoCtrl = {}

productoCtrl.borrarProducto = (req, res)=> {
    res.send('alguien quiere borrar producto')
  };

productoCtrl.nuevoProducto = (req, res)=> {
    res.send('alguien quiere agregar producto')
};  

export default productoCtrl;