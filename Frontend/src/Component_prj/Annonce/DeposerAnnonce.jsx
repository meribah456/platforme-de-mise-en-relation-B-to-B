import React, { Component } from 'react'
import './Dan.css' ;
import axios from 'axios' ; 


class DeposerAnnonce extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            Titre_annonce : '',
            Langue_annonce : '',
            Pays_Annonceur : '',
            Theme_annonce : '',
            Sous_theme_annonce : '',
            Description_annonce : ''
        }
    }
    
      handleChange = event =>{
        this.setState({
          [event.target.name] : event.target.value   
                    })
      } ; 
    

      handleSubmit = (event) => {
        event.preventDefault();

///////////////////////////  DEPOSER ANNONCE DANS BD 

        const Annonce_info ={
            Titre_annonce :this.state.Titre_annonce ,
            Langue_annonce  : this.state.Langue_annonce ,
            Pays_Annonceur  : this.state.Pays_Annonceur ,
            Theme_annonce  : this.state.Theme_annonce , 
            Sous_theme_annonce  : this.state.Sous_theme_annonce ,
            Description_annonce  : this.state.Description_annonce 
           }

           console.log(" les info annonce  "+this.state.Titre_annonce );

          axios.post('http://localhost:3200/DeposerAnnonce',Annonce_info)
                  .then(res =>{
                
                      this.props.history.push('/') ; 
                     
                  }).catch(err => console.log(err)) ; 

//////////////////////////////////////// FIN DEPOSER ANNONCE 
      };
    
       
     
    render () {
        return (
   
<div className="container"> 
          <div className="row" >
              <div className="col-md-10 my-4 mx-auto" >
              <div className="card bg-light" >

               <div className="card-header" ><center><h1>Desposez-vous votre Annonce ! </h1></center></div>
               <div className="card-body" > 
                          
                    
       
                               <form onSubmit={this.handleSubmit}>

                                       <div  className="form-group">
                                            <label for="adtitle">  <h6>Titre d'annonce</h6> </label>
                                             <input type="text" name="Titre_annonce" onChange={this.handleChange}  placeholder="Titre de votre Annonce......."  className="form-control " />
                                       </div>
                                       
                                    <div  className="form-group ">
                                         <label for="Selecionner la langue de l'annonce">
                                             <h6>ad language</h6>
                                        </label> 
                                        <select  className="form-control"  name="Langue_annonce" onChange={this.handleChange} id="Langue_annonce">
                                            <option value="" selected disabled>--Séléctionner la langue de votre Annonce--</option>
                                            <option>Francais</option>
                                            <option>Anglais</option>
                                        </select> 
                                   </div> 
                                   
                                    <div  className="form-group ">
                                         <label for="Selecionner Pays annonceur ">
                                             <h6>Pays d'annonceur  </h6>
                                        </label> 
                                        <select  className="form-control"  name="Pays_Annonceur" onChange={this.handleChange} id="Pays_Annonceur">
                                            <option value="" selected disabled>--Séléctionner  Pays d'annonceur--</option>
                                            <option>Afrique du Sud   </option>
                                            <option>Algérie  </option>
                                            <option>Angola </option>
                                            <option>Bénin     </option>
                                            <option>Botswana    </option>
                                            <option>Burkina Faso    </option>
                                            <option>Burundi    </option>
                                            <option>Cameroun     </option>
                                            <option>Cap-Vert    </option>
                                            <option>République centrafricaine    </option>
                                            <option>Comores     </option>
                                            <option>République du Congo     </option>
                                            <option>République démocratique du Congo    </option>
                                            <option>Côte d'Ivoire     </option>
                                            <option>Djibouti     </option>
                                            <option>Égypte     </option>
                                             <option>Érythrée    </option>
                                             <option>Éthiopie    </option>
                                             <option>Gabon    </option>
                                             <option>Gambie    </option>
                                             <option>Ghana    </option>
                                             <option>Guinée    </option>
                                             <option>Guinée-Bissau </option>
                                             <option>Guinée équatoriale </option>
                                             <option>Kenya    </option>
                                             <option>Lesotho    </option>
                                             <option>Liberia    </option>
                                             <option>Libye    </option>
                                             <option>Madagascar    </option>
                                             <option>Malawi    </option>
                                             <option>Mali    </option>
                                             <option>Maroc    </option>
                                             <option>Maurice    </option>
                                             <option>Mauritanie    </option>
                                             <option>Mozambique    </option>
                                             <option>Namibie    </option>
                                             <option>Niger    </option>
                                             <option>Nigeria    </option>
                                             <option>Ouganda    </option>
                                             <option>Rwanda    </option>
                                             <option>São Tomé-et-Principe    </option>
                                             <option>Sénégal    </option>
                                             <option>Seychelles    </option>
                                             <option>Sierra Leone    </option>
                                             <option>Somalie    </option>
                                             <option>Soudan    </option>
                                             <option>Swaziland    </option>
                                             <option>Tchad    </option>
                                             <option>Tanzanie    </option>
                                             <option>Togo    </option>
                                             <option>Tunisie    </option>
                                             <option>Zambie    </option>
                                             <option>Zimbabwe    </option>
                                        </select> 
                                   </div>

                                   <div  className="form-group "> <label for="Theme_annonce">
                                       <h6>Théme</h6>
                                   </label> <select  name="Theme_annonce"  onChange={this.handleChange} className="form-control" id="Theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Insurance">Insurance</option>
                                        <option value="Financing">Financing</option>
                                       <option value="Petrol_Gas_Mines"> Petrol / Gas / Mines</option>
                                       <option value="Telecommunication">Telecommunication</option>
                                       <option value="Services">Services</option>
                                        <option value="Transport_Logistics_Storage">Transport, Logistics and Storage</option>
                                       <option value="Food_Beverage">Food and Beverage</option>
                                       <option value="Real_Estate">Real Estate</option>
                                       <option value="Training">Training</option>
                                       <option value="Projects_Partnerhip">Projects Partnerhip</option>
                                       <option value="RenewableEnergy">Renewable Energy</option>
                                       <option value="TextileIndustry">Textile Industry</option>
                                       
                                   </select> </div>
                                    
 
                                    {this.state.Theme_annonce=="Insurance" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous Thémes</h6>
                                   </label> <select  className="form-control" name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce ">
                                       <option value="" selected disabled>--Sélécionner votre sous théme --</option>
                                       <option value="Banks">Car Insurance </option>
                                       <option value="Investment Funds">Home Insurance</option>
                                       <option value="Business Angels">Life Accident Insurance</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.Theme_annonce=="Financing" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous Thémes</h6>
                                   </label> <select  className="form-control" name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme --</option>
                                       <option value="Banks">Banks </option>
                                       <option value="Investment Funds">Investment Funds</option>
                                       <option value="Business Angels">Business Angels</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Petrol_Gas_Mines" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Exploration">Exploration /  /  / Others </option>
                                       <option value="Distribution">Distribution</option>
                                       <option value="Equipment">Equipment</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Telecommunication" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value=" Installation"> Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Services" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control" name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Fiduciary">Fiduciary</option>
                                       <option value="Law Firm"> Law Firm</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Transport_Logistics_Storage" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Transport">Transport</option>
                                       <option value="Logistics">Logistics</option>
                                       <option value="Storage">Storage</option>
                                       <option value="Others">Others</option>
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Food_Beverage" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce"  >
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Producers">Producers</option>
                                       <option value="Cooperatives">Cooperatives</option>
                                       <option value="Trading Companies">Trading Companies</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Real_Estate" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Architect">Architect </option>
                                       <option value="Building Materials">Building Materials</option>
                                       <option value="Construction">Construction</option>
                                       <option value="Services ">Services (Guarding / Gardening…) </option>
                                       <option value="Property Management">Property Management</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="Training" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                      
                                       <option value="Specialized Masters">Specialized Masters</option>
                                       <option value="Languages">Languages</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   
                                   {this.state.Theme_annonce=="RenewableEnergy" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Installation">Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.Theme_annonce=="TextileIndustry" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Sous thémes</h6>
                                   </label> <select  className="form-control"  name='Sous_theme_annonce'  onChange={this.handleChange}  id="Sous_theme_annonce">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Distribution">Distribution</option>
        
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

       
                                   <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1"><h6>Description de l'annonce</h6></label>
                                    <textarea  
                                    class="form-control" 
                                    required name="Description_annonce" 
                                     onChange={this.handleChange} 
                                      id="" placeholder="Description ....."
                                       rows="3"></textarea>
                                     </div>
                                     

                                     <form>
  <div class="form-group">
    <label for="exampleFormControlFile1"><h6>Selectionner image de l'annonce  </h6></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>

                                        <div className="form-group ">
                                          <button className="btn btn-primary  " type="submit" >Envoyer</button>
                                        </div>
                               </form>   
                       </div>
                   </div>
               </div>
           </div>
          
        </div>
      
        )
    }
}

export default DeposerAnnonce
