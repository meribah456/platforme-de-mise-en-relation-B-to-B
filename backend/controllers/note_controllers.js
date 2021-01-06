const Note = require('../models/note_model') ; 

// selectionner les notes de la base donnee 
const getAllNotes = (req,res) => {
    Note.find( (err,notes) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !notes) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des notes sous forma json 
        res.json({notes}) ; 
    })
} ; 

// selectionner note by id 
const getNoteById = (req,res) => {
    Note.findById(req.params.id).then(note_trouve => {

        res.json({note_trouve}) ; 

    }).catch(err => console.log(err)) ;
} ; 

// selectionner  Les Noms des notes de la base donnee 
const getAllNotesNames  = (req,res) => {
    Note.find( (err,notes) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !notes) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des notes sous forma json 
        res.json({notes}) ; 

        // CETTE OPTION .select permet se specifier les champs à selectionner 
    }).select('title') ; // .select(' title body createdAt' ) permet de selectionner la date de creation ,title et body 
} ; 

const addNote = (req,res)=> {
            const title = req.body.title;
            const body = req.body.body ; 
           

            // creation de la nouvelle note 
            const new_note = new Note({title , body}) ;

            // ajout de la note dans la base de donne
            new_note.save().then ( () => {
                res.json("la note est ajouté averc succés") ; 
            }).catch (err => console.log(err)) ; 
} ;

const updateNote = (req,res) => {
    Note.findById(req.params.id).then(note_trouve => {
        note_trouve.title = req.body.title ; 
        note_trouve.body = req.body.body ; 

        note_trouve.save().then(() =>{
             res.send(' modifié avec succes') ; 
        } ).catch(err => console.log(err)) ; 
    }).catch(err => console.log(err)) ;
} ; 

const deleteNote = (req,res) => {
    Note.findByIdAndDelete(req.params.id).then(note_trouve => {
        res.send('la note a été  Supprimé avec succes') ; 
    }).catch(err => console.log(err)) ;
}
module.exports = {getAllNotesNames , getAllNotes , addNote , updateNote , deleteNote , getNoteById} ;