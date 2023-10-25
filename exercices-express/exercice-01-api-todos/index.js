import express from "express"
import {todosData} from "./todos.js"
import { appendFile, readFileSync, writeFile } from "fs"

const todos = todosData

const app = express();
const todosFile = "./todos.json";

app.use(express.json());

// EndPoint pour récupérer la liste de todos
app.get("/todos", (req, res) => {
    res.json(JSON.parse(readFileSync(todosFile)))
});

// EndPoint pour ajouter une todo 
app.post("/todos", (req, res) => {
    console.log(req.body);
    res.json(req.body)
    appendFile( todosFile, `${JSON.stringify(req.body)}\n`, (err)=> {
        if(err) {
            console.error(err);
            return;
        }
    })
});

// Endpoint pour récupérer une todo
app.get("/todos/:id", (req, res) => {
    const { todos } = JSON.parse(readFileSync(todosFile))
    const todoFound = todos.find((t) => t.id == req.params.id )
    res.json(todoFound)
})

// EndPoint pour supprimer une todo 
app.delete("/todos/:id", (req, res) => {
    const { todos } = JSON.parse(readFileSync(todosFile))
    const newTodosTab = todos.filter((t) => t.id != req.params.id)
    console.log(newTodosTab);
    res.json(newTodosTab)
    writeFile( todosFile, `${JSON.stringify(newTodosTab)}`, (err) => {
        if(err) {
            console.error(err);
            return
        }
    })
})





// TODOS : 

// Endpoint pour rechercher des todos par leur titre
app.get("/todos/:title", (req, res) => {
    const { todos } = JSON.parse(readFileSync(todosFile))
    const todoFound = todos.find((t) => t.title == req.params.title )
    console.log(todoFound);
    res.json(todoFound)
})

// Endpoint pour modifier une todo
app.patch("/todos/:id", (req, res) => {
    const { todos } =JSON.parse(readFileSync(todosFile))
});

// Endpoint pour modifier le statut d'une todo
app.patch("/todos/:id/:statut", (req, res) => {

})



app.listen(3030, ()=>{
    console.log("http://127.0.0.1:3030");
})