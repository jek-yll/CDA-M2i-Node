import express from 'express'
import { ProductDao } from '../dao/ProductDao.js'
import { Product } from './../models/Product.js';

export const products = express.Router()
export const productDao = new ProductDao()

// Affiche la liste des products
products.get('/', (req, res) => {
    res.json(productDao.getAll())
})

// Afficher un product via son id
products.get('/:id', (req, res) => {
    let product = productDao.findById(req.params.id);

    if(product == undefined) {
        res.status(404).json({ code: 404, message: "Aucun product n'a été trouvé" })
    }

    res.json(product)
})

// Créer un product
products.post('/', (req, res) => {
    const { title, price, stock } = req.body;
    let product = new Product( null, title, price, stock )
    res.json(productDao.save(product))
})

