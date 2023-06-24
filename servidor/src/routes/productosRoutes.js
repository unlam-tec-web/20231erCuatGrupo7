import { Router } from 'express';
import { getProductos, createProducto, updateProducto, deleteProducto, getUnProducto } from '../controllers/productosController.js';

const router = Router();

router.get('/productos', getProductos);
router.get('/productos/:id', getUnProducto);

router.post('/productos', createProducto);

router.patch('/productos/:id', updateProducto);

router.delete('/productos/:id', deleteProducto);

export default router;