const User_individuel_model = require('../../models/User/user_individuel_model') ; 
const User_entreprise_model = require('../../models/User/user_entreprise_model') ; 

const AddUserEntreprise = (req,res)=> {
    const Nom= req.body.Nom;
    const phone= req.body.phone ;
    const Paysresidence = req.body.Paysresidence;
    const Datedenaissance = req.body.Datedenaissance ;
    const email = req.body.email;
    const password = req.body.password ;

            // creation de la nouvelle note 
            const new_user_entreprise = new User_entreprise_model ({Nom , 
                phone,Paysresidence,Datedenaissance,
                  email ,password }) ;

            // ajout de la user dans la base de donne
            new_user_entreprise.save().then ( () => {
                console.log(" new_user_entreprise est ajouté averc succés dans bd users ") ; 

                res.json({message : "ajouté avec succés"}) ;

            }).catch (err => console.log(err)) ; 
} ;


const AddUserIndividuel = (req,res)=> {
    const Nom= req.body.Nom;
    const Prenom= req.body.Prenom;
    const phone= req.body.phone ;
    const Paysresidence = req.body.Paysresidence;
    const Datedenaissance = req.body.Datedenaissance ;
    const email = req.body.email;
    const password = req.body.password ;


    const email_user = req.body.email;
    const password_user  = req.body.password ;

    console.log(email_user) ; 
    console.log(password_user) ; 
            // creation de la nouvelle user
            const new_user_individuel = new User_individuel_model({Nom , Prenom,
                phone,Paysresidence,Datedenaissance,
                 email ,password }) ;

            // ajout de la note dans la base de donne
            new_user_individuel.save().then ( () => {
                console.log(" new_user_individuel est ajouté aver succés dans bd user") ;
                
                res.json({message : "ajouté avec succés"}) ;

            }).catch (err => console.log(err)) ; 
} ;

// connection 
const UserConnection = (req,res) => {

    // const email_user = 'ayoubjkhar@gmail.com';
    // const password_user  = 'AAA' ;

    const email_user = req.body.email;
    const password_user = req.body.password ;

    console.log(email_user) ; 
 
    User_individuel_model.find({ email : { $eq: email_user } ,  password : { $eq: password_user }}).then(user_trouve => {

        console.log( " recherche dans bd individuael  ");

        if(user_trouve.length==0) {
            console.log( " recherche dans bd entreprisssseeee ");

            User_entreprise_model.find({ email : { $eq: email_user } ,  password : { $eq: password_user }}).then(user_trouve => {

                res.json({user_trouve}) ;
                console.log(user_trouve) ; 
                console.log(user_trouve.length);
                
            }).catch(err => console.log(err)) ;
        }

        else {
        res.json({user_trouve}) ;
        console.log(user_trouve) ; 
        console.log(user_trouve.length);

        }
     

    }).catch(err => console.log(err)) ;

} ; 

module.exports = {AddUserEntreprise , AddUserIndividuel , UserConnection} ;