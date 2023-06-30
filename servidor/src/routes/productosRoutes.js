import { Router } from 'express';
import { getProductos, createProducto, updateProducto, deleteProducto, getUnProducto, getProductosComic, getProductosManga, getProductosLibro } from '../controllers/productosController.js';

const router = Router();

router.get('/productos', getProductos);

router.get('/productos/comic', getProductosComic);
router.get('/productos/libro', getProductosLibro);
router.get('/productos/manga', getProductosManga);

router.get('/productos/:id', getUnProducto);

router.post('/productos', createProducto);


export default router;