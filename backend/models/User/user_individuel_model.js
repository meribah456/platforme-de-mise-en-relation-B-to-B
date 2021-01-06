const mongoose = require('mongoose') ; 

const noteSchema = mongoose.Schema({

            Nom : {
                type : String , 
                required : true , 
        
            } ,
            Prenom : {
                type : String , 
                required : true , 
        
            } ,
 
            phone : {
                type : String , 
                required : true , 
        
            } ,

            Paysresidence : {
                type : String , 
                required : true , 
        
            },
            Datedenaissance : {
                type : String , 
                required : true , 
        
            },              
            
            email : {
                type : String , 
                required : true , 
        
            },
            
            password : {
                type : String , 
                required : true , 
            },
            
} ,{ timestamps : true }) ; 

module.exports = mongoose.model('User_individuel_model' , noteSchema) ; 