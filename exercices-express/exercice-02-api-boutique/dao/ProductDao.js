import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path";
import {v4 as uuidv4 } from "uuid"

export class ProductDao {
    constructor(){
        this.file = resolve("./data/products.json");
        this.products = [];
    }

    readFile(){
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.products = JSON.parse(file)
    }

    writeFile() {
        writeFileSync(this.file, JSON.stringify(this.products))
    }

    getAll() {
        return this.products
    }

    save(products) {
        products.id = uuidv4();
        this.products.push(products)
        this.writeFile()
        return products;
    }

    findById(id) {
        return this.products.filter((p) => p.id === id)
    }
}