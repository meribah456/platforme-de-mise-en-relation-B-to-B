const mongoose = require('mongoose') ; 

const AnnonceSchema = mongoose.Schema({
            Titre_annonce  : {
                type : String , 
                required : true ,      
            } ,

            Langue_annonce : {
                type : String , 
                required : true ,    
            } ,

            Pays_Annonceur : {
                type : String , 
                required : true ,    
            } ,

            Theme_annonce : {
                type : String , 
                required : true ,   
            },

            Sous_theme_annonce : {
                type : String , 
                required : true , 
            },

            Description_annonce  : {
                type : String , 
                required : true , 
            }
            
                             
} ,{ timestamps : true }) ; 

module.exports = mongoose.model('Annonce_model' , AnnonceSchema) ; 