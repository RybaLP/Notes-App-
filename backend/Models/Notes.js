const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    text: String, 
    title: String,
    bgcolor: String, 
    fontcolor: String
})

const NotesModel = mongoose.model('notes', NotesSchema);
module.exports = NotesModel;
