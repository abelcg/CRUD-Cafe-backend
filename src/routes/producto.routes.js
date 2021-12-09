import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

//aqui creo las rutas

router
  .route("/")
  .delete(productoCtrl.borrarProducto)
  .post(productoCtrl.nuevoProducto)

/* app.delete('/borrarproducto', (req, res)=> {
    res.send('alguien quiere borrar producto')
  })
   */

export default router;
