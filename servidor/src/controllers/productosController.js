import { pool } from '../db.js';

export const getProductos = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM productos');
    res.json(rows);
};
export const getProductosComic = async(req, res) => {
    const [rows] = await pool.query("SELECT * FROM productos WHERE clasificacion='comic' OR clasificacion = 'Comic'");
    res.json(rows);
};
export const getProductosManga = async(req, res) => {
    const [rows] = await pool.query("SELECT * FROM productos WHERE clasificacion='manga' OR clasificacion = 'Manga'");
    res.json(rows);
};
export const getProductosLibro = async(req, res) => {
    const [rows] = await pool.query("SELECT * FROM productos WHERE clasificacion='Libro' OR clasificacion = 'libro'");
    res.json(rows);
};

export const getUnProducto = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM productos WHERE id=?', [req.params.id]);
    if (rows.length <= 0) return res.status(404).json({
        message: 'Producto inexistente'
    })
    res.json(rows[0]);
};

export const createProducto = async(req, res) => {
    const { nombre, descripcion, clasificacion, precio, imagen } = req.body;
    const [rows] = await pool.query('INSERT INTO productos (nombre,descripcion,clasificacion,precio,imagen) VALUES (?,?,?,?,?)', [nombre, descripcion, clasificacion, precio, imagen]);
    res.send({
        id: rows.insertId,
        nombre,
        descripcion,
        clasificacion,
        precio,
        imagen
    });
};

export const updateProducto = async(req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, clasificacion, precio } = req.body;

    const [result] = await pool.query('UPDATE productos SET nombre=IFNULL(?,nombre),descripcion=IFNULL(?,descripcion),clasificacion=IFNULL(?,clasificacion),precio=IFNULL(?,precio) WHERE id=?', [nombre, descripcion, clasificacion, precio, id]);
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Producto no encontrado'
    });
    //para mostrar los nuevos datos actualizados
    const [rows] = await pool.query('SELECT * FROM productos WHERE id=?', [id])
    res.json(rows[0]);
};

export const deleteProducto = async(req, res) => {
    const [result] = await pool.query('DELETE FROM productos WHERE id=?', [req.params.id]);
    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'No se encontró el producto'
    })
    res.send({ message: 'Se eliminó con exito' });
};