const express = require('express');
const router = express.Router();
const NotesModel = require('../Models/Notes');


// Route to get all notes
router.get('/', (req, res) => {
    NotesModel.find({})
        .then(notes => res.json(notes))
        .catch(err => console.log(err));
});

// Route to add a new note
router.post('/addNote', (req, res) => {
    NotesModel.create(req.body)
        .then(note => res.json(note))
        .catch(err => res.json(err));
});


router.get('/getNote/:id', (req,res)=>{
    const id = req.params.id;
    NotesModel.findById({_id:id})
    .then(notes => res.json(notes))
    .catch(err => res.json(err));
})

router.put('/editnote/:id', (req,res)=>{
    const id = req.params.id;
    NotesModel.findByIdAndUpdate({_id:id}, {title: req.body.title, text: req.body.text, fontcolor: req.body.fontcolor, bgcolor: req.body.bgcolor})
    .then(notes => res.json(notes))
    .catch(err => res.json(err))
})

router.delete('/deletenote/:id', (req,res)=>{
    const id = req.params.id; 
    NotesModel.findOneAndDelete({_id: id})
    .then(() => res.json({message: 'user deleted successfully'}))
    .catch(err => res.json(err))
})


module.exports = router;
