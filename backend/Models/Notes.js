const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    text: String, 
    title: String
})

const NotesModel = mongoose.model('notes', NotesSchema);
module.exports = NotesModel;
