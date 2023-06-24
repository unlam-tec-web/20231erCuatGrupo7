import express from 'express';
import productosRoutes from './routes/productosRoutes.js';
import indexRoutes from './routes/indexRoutes.js';

const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use('/api', productosRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Error,página inexistente'
    });
});

export default app;