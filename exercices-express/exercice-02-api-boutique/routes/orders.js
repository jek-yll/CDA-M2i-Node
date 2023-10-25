import express from 'express'
import { OrderDao } from '../dao/OrderDao.js'
import { Order } from './../models/Order.js'


export const orders = express.Router()
export const orderDao = new OrderDao()


// Afficher la liste des commandes 
orders.get('/', (req, res) => {
    res.json(orderDao.getAll())
})

// Afficher une commande via son id 
orders.get('/:id', (req, res) => {
    let order =  orderDao.findById(req.params.id)

    if(order == undefined) {
        res.status(404).json({ code: 404, message: "Aucune commande trouvé" })
    }

     res.json(order)
})

orders.post('/', (req, res) => {
    const { client, products } = req.body
    if(orderDao.orderIsPossible( client, products)) {
        res.status(404).json({ code: 400, message: "Commande impossible a effectuer " })
    } else {
        let order = new Order( null, client, products )
        res.json(orderDao.save(order))
    }
})