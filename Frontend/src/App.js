import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom' ; 
import Notes from './components/Notes' ; 
import EditNote from './components/EditNote'  ; 
import AddNote from './components/AddNote' ; 
import NavBar from './components/NavBar' ; 
 import Profil from './Component_prj/MonCompte/Profil'
import Home from './Component_prj/Home/Home'
import AboutUs from './Component_prj/About/AboutUs'
import Inscription from   './Component_prj/inscription/Inscription'
import connecter from './Component_prj/connection/FormulaireLogin'
import Footer from './Component_prj/Footer/footer'
import  DeposerAnnonce from './Component_prj/Annonce/DeposerAnnonce'

import ContactUs from './Component_prj/ContactUs/ContactUs'
import Payment from './Component_prj/Payment/Payment'
import Services from './Component_prj/ServiceDisponibles/Services'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import history from './history';




function App() {
  return (
    <div className="app" >
      <BrowserRouter history={history}>
         {/* navbar commun avec toutes les pages */}
       
         {window.$statu_user===0 && <NavBar/> }
         {window.$statu_user===1 && 
         <div><NavBar/><NavBar/></div>}
         

        <Switch>
        <Route  path="/"  exact component={Home} /> 
        <Route  path="/About"  exact component={AboutUs} />
        <Route  path="/MonCompte"  exact component={Profil} />   
        <Route  path="/DeposerAnnonce"  exact component={DeposerAnnonce} />   
        <Route  path="/connection"   component={connecter} />   
        <Route  path="/inscription"   component={Inscription} />
        <Route  path="/Payment"   component={Payment} />
        <Route  path="/ServicesDispo"   component={Services} />
        
        <Route  path="/ContactUs"   component={ContactUs} />
        
        </Switch>
     
 <Footer/>
    
      
       </BrowserRouter>
    </div>
  );
}

export default App;
