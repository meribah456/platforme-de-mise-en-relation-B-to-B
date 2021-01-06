const express = require('express') ;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors') ;

// utilisation des routes dans 
const {gestion_notes_routes} = require('./routes/note_routes'); 

// permet à application d'utilisation des routes 

// nous pemrmet d'utiliser les variable d'envirenement 
require('dotenv').config() ; 

const url_db = process.env.URL_DATA_BASE ;

// pour eviter les erreur 
mongoose.set('useNewUrlParser',true) ;
mongoose.set('useFindAndModify',true) ;
mongoose.set('useCreateIndex',true) ;
mongoose.set('useUnifiedTopology',true) ;

app.use(express.json({extended: false})) ; 


app.use(cors()) ; 

// connextion à la base de donnée 
mongoose.connect(url_db).then( ()=> console.log('connected to data base'))
                        .catch((err)=> console.log(err)) ; 
app.get('/', (req,res) => {
    res.send(' Api Working ')
}) ; 


app.use('/',gestion_notes_routes) ;

const port = process.env.port || 3200 ; 

app.listen(port , () => console.log(' server running at port ' + port)) ; 
