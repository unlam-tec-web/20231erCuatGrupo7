import { Router } from 'express';
import conexion from '../db.js';

const router = Router();


router.get('/productos/comic', (req, res) => {
    let sql = "select * from productos where clasificacion='comic' or clasificacion='Comic'";
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

})

router.get('/productos/libro', (req, res) => {
    let sql = "select * from productos where clasificacion='libro' or clasificacion='Libro'";
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

})

router.get('/productos/manga', (req, res) => {
    let sql = "select * from productos where clasificacion='manga' or clasificacion='Manga'";
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })

})
router.get('/productos/:id', (req, res) => {
    let { id } = req.params;
    let sql = `SELECT * FROM productos WHERE id = ${id}`;
    conexion.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.send('Not result');
        }
    });
});


router.post('/productos', (req, res) => {
    const { nombre, descripcion, clasificacion, precio, imagen } = req.body

    let sql = `insert into productos( nombre,descripcion,clasificacion,precio,imagen) values('${nombre}','${descripcion}','${clasificacion}','${precio}','${imagen}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'equipo agregado' })
        }
    })
})


export default router;