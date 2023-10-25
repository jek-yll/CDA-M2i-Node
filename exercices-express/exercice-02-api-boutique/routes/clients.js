import express from 'express';
import { ClientDao } from '../dao/ClientDao.js';
import { Client } from '../models/Client.js';

export const clients = express.Router()
export const clientDao = new ClientDao();

// Affiche la listes des clients
clients.get('/', (req, res) => {
    res.json(clientDao.getAll())
})

// Afficher un client via son id
clients.get('/:id', (req, res) => {
    let client = clientDao.findById(req.params.id);

    if(client == undefined) {
        res.status(404).json({ code: 404, message: "Aucun client n'a été trouvé" })
    }

    res.json(client)
})

// Créer un client
clients.post('/', (req, res) => {
    const { firstname, lastname, phoneNumber } = req.body;
    let client = new Client( null, firstname, lastname, phoneNumber )
    res.json(clientDao.save(client))
})

