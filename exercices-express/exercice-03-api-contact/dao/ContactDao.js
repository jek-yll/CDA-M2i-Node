import { readFileSync, writeFileSync } from "fs"
import { v4, uuidv4 } from "uuid"
import { resolve } from path

export class ContactDao {
    constructor(){
        this.file = resolve('./db.csv')
        this.contacts = []
    }
    
    readFile() {
        
    }

    writeFile() {

    }

    getAll() {
        return this.contacts
    }

    save(contact) {
        contact.id = uuidv4()
        this.contacts.push(contact)

        // Ecriture du fichier 
        return contact
    }

    findById(id) {
        return this.contacts.find((c) => c.id === id)
    }

    deleteContact(id) {
        this.contacts = this.contacts.filter((c) => c.id !== id)
        // Ecriture du fichier
    }

    updateContact(contactUpdate) {
        const contact = this.findById(contactUpdate.id)
        if (contact == undefined) {
            return false
        }
        contact.firstname = contactUpdate.firstname
        contact.lastname = contactUpdate.lastname
        contact.phoneNumber = contactUpdate.phoneNumber
        contact.email = contactUpdate.email

        // Ecriture du fichier
        return true
    }
}
