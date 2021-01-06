const { connection } = require('mongoose');
const Annonce_model = require('../../models/Annonce/Annonce_model') ; 

const DeposerAnnonce = (req,res)=> { 
     
    const Titre_annonce= req.body.Titre_annonce;
    const Langue_annonce= req.body.Langue_annonce ;
    const Pays_Annonceur= req.body.Pays_Annonceur ;
    const Theme_annonce = req.body.Theme_annonce; 
    const Sous_theme_annonce = req.body.Sous_theme_annonce ; 
    const Description_annonce = req.body.Description_annonce;
  
    // creation de la nouvelle note 
    const new_annonce = new Annonce_model ({Titre_annonce , 
        Langue_annonce,Pays_Annonceur ,Theme_annonce,
        Sous_theme_annonce ,Description_annonce}) ;

    // ajout de la user dans la base de donne
    new_annonce.save().then ( () => {
        console.log("Annonce est ajouté averc succés") ; 
    }).catch (err => console.log(err)) ; 
} ;


// selectionner les Annonces  
const getAllAnnonces = (req,res) => {
    Annonce_model.find( (err,annonces_from_bd) => {

        // si il ya des erreurs ou la list des note est vide 
        if(err || !annonces_from_bd) {
            return res.json( { error : "La list est vide "}) ; 
        }

        // c'est il y'a pas d'erreur on va retourner la list des annonces sous forma json
        console.log(annonces_from_bd) ;
        res.json({annonces_from_bd}) ; 
    })
} ; 

module.exports = {DeposerAnnonce , getAllAnnonces } ;