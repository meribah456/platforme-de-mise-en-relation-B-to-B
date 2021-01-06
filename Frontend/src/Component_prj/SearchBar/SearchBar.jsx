import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            AdThemes: '',
            AdUnderThemes: null
        }
    }
    handleChange(e) {
        this.setState({AdThemes: e.target.value});
      }
    

      handleSubmit = (event) => {
        event.preventDefault();
        const { AdThemes} = this.state;
        alert(`Your registration detail: \n 
        
        AdThemes: ${AdThemes}\n
        `);
      };
    

    render() {
        return (
            <div>
         <center className ="mt-2">  <h1> Que cherchez Vous !</h1></center>
<form className="ml-2 mt-4  ">
 
 
 
 
  <div class="form-row">
   
   
 

    <div class="form-group col-md-3 mt-1 ">
      <select class="form-control"   id="AdThemes"  onChange={this.handleChange}  >
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
                              

      </select>
    </div>


{this.state.AdThemes=="Financing" && <div  className="form-group mt-1"> 
      <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme --</option>
                                       <option value="Banks">Banks </option>
                                       <option value="Investment Funds">Investment Funds</option>
                                       <option value="Business Angels">Business Angels</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div> } 


    
                                   {this.state.AdThemes=="Petrol_Gas_Mines" &&<div  className="form-group mt-1"> 
                                 
                                 
                                    <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Exploration">Exploration /  /  / Others </option>
                                       <option value="Distribution">Distribution</option>
                                       <option value="Equipment">Equipment</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Telecommunication" &&<div  className="form-group mt-1"> 
                                   
                                    <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value=" Installation"> Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Services" &&<div  className="form-group mt-1">
                                   
                                    <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Fiduciary">Fiduciary</option>
                                       <option value="Law Firm"> Law Firm</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Transport_Logistics_Storage" &&<div  className="form-group mt-1"> 
                        
                                    <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Transport">Transport</option>
                                       <option value="Logistics">Logistics</option>
                                       <option value="Storage">Storage</option>
                                       <option value="Others">Others</option>
                                   </select> </div>}

                                   {this.state.AdThemes=="Food_Beverage" &&<div  className="form-group mt-1"> 
                                   
                                   <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Producers">Producers</option>
                                       <option value="Cooperatives">Cooperatives</option>
                                       <option value="Trading Companies">Trading Companies</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Real_Estate" &&<div  className="form-group mt-1"> 
                 
                                   <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Architect">Architect </option>
                                       <option value="Building Materials">Building Materials</option>
                                       <option value="Construction">Construction</option>
                                       <option value="Services ">Services (Guarding / Gardening…) </option>
                                       <option value="Property Management">Property Management</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="Training" &&<div  className="form-group mt-1">
                                   
                                   
                                   <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                      
                                       <option value="Specialized Masters">Specialized Masters</option>
                                       <option value="Languages">Languages</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   
                                   {this.state.AdThemes=="RenewableEnergy" &&<div  className="form-group mt-1"> 
                        
                                    <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Installation">Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                   {this.state.AdThemes=="TextileIndustry" &&<div  className="form-group mt-1"> 
                                   
                                   <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Sélécionner votre sous théme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Distribution">Distribution</option>
        
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}

                                      



    <div class="form-group col-md-3">
      <input type="text" class="form-control" id="inputZip"   placeholder="Search ..... "/>
    </div>


    <div class="form-group col-md-2 mt-1">
     <button type="submit"  class="btn btn-primary ml-2">Chercher</button>

    </div>

  </div>

</form>   
            </div>
        )
    }
}


