import express from 'express';
import { clients, clientDao  } from './routes/clients.js'
import { products, productDao } from './routes/products.js'
import { orders, orderDao } from './routes/orders.js';

const port = 3030
const app = express()

app.use(express.json())
app.use('/clients', clients);
app.use('/products', products);
app.use('/orders', orders)

app.listen(port, () => {
    productDao.readFile()
    clientDao.readFile()
    //orderDao.readFile()
    console.log( `http://127.0.0.1:${port}`);
})