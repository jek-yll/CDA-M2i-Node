import express from "express"
import { ContactDao } from './dao/ContactDao';
import { Contact } from "./models/Contact";
import { dateMiddleware, queryLogger, authMiddleware } from "./middlewares/middlewares";

const app =  express()
app.use(express.json())
app.use(dateMiddleware)
app.use(queryLogger)

const contactDao = new ContactDao()

// GET ALL
app.get('/contacts', (req, res) => {
    res.json(contactDao.getAll())
})

//GET ONE
app.get('/contacts/:contactId', (req, res) => {
    let contact = contactDao.findById(req.params.contactId)

    if(contact == undefined){
        res.status(404).json({ code: 404, message: `auncun contact trouvé avec l'id : ${req.params.contactId}` })
    }

    res.json(contact)
})

//POST
app.post('/contacts',authMiddleware, (req, res) => {
    const {firstname, lastname, phoneNumber, email} = req.body;
    let contact = new Contact(null, firstname, lastname, phoneNumber, email);
    res.json(contactDao.save(contact));
});

// PUT
app.put('/contacts/:contactId',authMiddleware, (req, res) => {
    const { id, firstname, lastname, phoneNumber, email } = req.body

    if (req.params.contactId != id) res.sendStatus(409)

    let contact =  new Contact( id, firstname, lastname, phoneNumber, email )

    contactDao.updateContact( contact ? res.sendStatus(200) : res.status(400).json({ code: 400, message: "problème !" }) )
})

//DELETE
app.delete('/contacts/:contactId',authMiddleware, (req, res) => {
    contactDao.deleteContact(req.params.contactId)
    res.sendStatus(200)
})


app.listen(3030, () => {

    console.log('http://127.0.0.1:3030')
})