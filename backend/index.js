const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const notesRouter = require('./Routes/router');
const cors = require('cors');


mongoose.connect('mongodb+srv://leszkusz:Nsu462J92LZysQX0@cluster0.mlzb3.mongodb.net/NoteAPI?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());
app.use('/', notesRouter);

app.listen(PORT, ()=>{
    console.log('server is running on port: http://localhost:5000');
})