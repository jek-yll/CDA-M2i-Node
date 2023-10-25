import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path";
import { ClientDao } from "./ClientDao.js";
import { ProductDao } from './ProductDao.js';
import {v4 as uuidv4 } from "uuid"

export class OrderDao {
    constructor(){
        this.file = resolve("./data/orders.json")
        this.orders = []
    }

    readFile(){
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.orders = JSON.parse(file)
    }

    writeFile() {
        writeFileSync(this.file, JSON.stringify(this.orders))
    }

    getAll() {
        return this.orders
    }

    save(orders) {
        orders.id = uuidv4();
        this.orders.push(orders)
        this.writeFile()
        return orders;
    }

    findById(id) {
        return this.orders.filter((p) => p.id === id)
    }

    orderIsPossible(clientId, productIds) {
        const clientDao = new ClientDao()
        const productDao = new ProductDao()
        const products = productDao.getAll()
        const clients = clientDao.getAll()

        const clientExists = clients.some(c => c.id === clientId)
        const productsOrderedExist = productIds.every(pId => products.some(p => p.id === pId))

        if (!clientExists || !productsOrderedExist) {
            return false
        } 

        return true
    }
}