const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const NotesModel = require('./Models/Notes');
const cors = require('cors');


mongoose.connect('mongodb+srv://leszkusz:Nsu462J92LZysQX0@cluster0.mlzb3.mongodb.net/NoteAPI?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());



app.get('/', (req,res)=>{
    NotesModel.find({})
    .then(notes => res.json(notes))
    .catch(err => console.log(err));
})

app.listen(PORT, ()=>{
    console.log(`connect server : http://localhost:5000`);
})

app.post('/addNote', (req,res)=>{
    NotesModel.create(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.json(err));
})
