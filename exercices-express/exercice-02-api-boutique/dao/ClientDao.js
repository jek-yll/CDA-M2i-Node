import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path";
import {v4 as uuidv4 } from "uuid"

export class ClientDao {
    constructor(){
        this.file = resolve("./data/clients.json");
        this.clients = [];
    }

    readFile(){
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.clients = JSON.parse(file)
    }

    writeFile() {
        writeFileSync(this.file, JSON.stringify(this.clients))
    }

    getAll() {
        return this.clients
    }

    save(client) {
        client.id = uuidv4();
        this.clients.push(client)
        this.writeFile()
        return client;
    }

    findById(id) {
        return this.clients.filter((c) => c.id === id)
    }
}