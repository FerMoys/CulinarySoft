import express from 'express';
import dishesRoutes from './routes/dishesRoutes.js'
import inventoryRoutes from './routes/inventoryRoutes.js'
import ticketsRoutes from './routes/ticketsRoutes.js'
import ordersRoutes from './routes/ordersRoutes.js'
import tablesRoutes from './routes/tablesRoutes.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express()

//Midlewares
app.use(express.json())


//Importando el 'paquete' de rutas
app.use('/api/dishes', dishesRoutes)
app.use('/api/products', inventoryRoutes)
app.use('/api/tickets', ticketsRoutes)
app.use('/api/orders', ordersRoutes)
app.use('/api/tables', tablesRoutes)


const PORT = process.env.PORT || 4000;
//Ruta de prueba
app.get('/', (req,res) =>{
    res.send('API running')
})

app.listen(PORT, () =>{
    console.log(`Servidor de restaurante funcionando en puerto ${PORT}`)
})
