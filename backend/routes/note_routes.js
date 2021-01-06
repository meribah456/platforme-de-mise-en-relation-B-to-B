const express = require('express') ; 
const  {getAllNotesNames , getAllNotes ,addNote ,updateNote , deleteNote , getNoteById} = require('../controllers/note_controllers') ;

const  { AddUserEntreprise ,AddUserIndividuel , UserConnection } = require('../controllers/user_controllers/user_controllers') ;
const  { DeposerAnnonce , getAllAnnonces  } = require('../controllers/annonce_controllers/annonce_controllers') ;
 
const gestion_notes_routes = express.Router() ; 

// Creation du Routes 
gestion_notes_routes.get('/notes',getAllNotes) ; 
gestion_notes_routes.get('/notes/nom' ,getAllNotesNames) ;
gestion_notes_routes.get('/note/:id' ,getNoteById) ;
gestion_notes_routes.post('/note/add',addNote) ; 
gestion_notes_routes.put('/note/update/:id',updateNote) ;
gestion_notes_routes.delete('/note/delete/:id',deleteNote) ;

gestion_notes_routes.post('/userEntreprise/add',AddUserEntreprise) ; 
gestion_notes_routes.post('/userIndividuel/add',AddUserIndividuel) ;

gestion_notes_routes.post('/userConnection',UserConnection) ;  

// pour les Annonces 

gestion_notes_routes.post('/DeposerAnnonce',DeposerAnnonce) ;   
gestion_notes_routes.get('/ListAnnonces' ,getAllAnnonces) ;


module.exports = {gestion_notes_routes} ; 