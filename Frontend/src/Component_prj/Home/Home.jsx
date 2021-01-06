import React, { Component } from 'react'
import './Home.css'
import  Annonce from '../Annonce/Annonce' 
import  SearchBar from  "../SearchBar/SearchBar";
import axios from 'axios'

 
 

export default class Home extends Component {

  state = {
    annonces_bd : []
}

componentDidMount() {
    this.getAnnonces_from_backend() ;
}

getAnnonces_from_backend =()=> {
    axios.get('http://localhost:3200/ListAnnonces')
            .then(res => {
                this.setState({
                  annonces_bd : res.data.annonces_from_bd 
                });
            }).catch(err => console.log(err)) ; 
}

    render() {
      console.log(this.state.annonces) ;
 {/* recuperation les note de state */}
 const {annonces_bd} = this.state ; 

        return (
            <div  >
                  <SearchBar/>

   
<div class="row">
  <div class="leftcolumn">
   
     {annonces_bd.length >0 && annonces_bd.map((annonce_selectionner , index)=> (
     <Annonce key={index} annonce ={annonce_selectionner} />))}

  </div>
  <div class="rightcolumn">

    <div class="card mr-3">
      <h2>Top Pays de Semaine</h2>
      <ul >
         
          <li>Algérie</li>
          <li>Angola</li>
          <li>Bénin</li>
          <li>Botswana </li>
          <li>Burkina Faso </li>
          <li>Burundi </li>
          <li>Cameroun </li>
          <li>Cap-Vert </li>
      </ul>
     
    </div>

    <div class="card mr-3 ">
      <h3>Théme Populaire </h3>
     
      <ul >    
      <a href="/"> <li> assurance </li> </a>   
      <a href="/"> <li> batiment  </li> </a>   
      <a href="/"> <li>hotellerie   </li> </a>   
      <a href="/"> <li> agricole </li> </a>   
      <a href="/"> <li> Digital product </li> </a>   
      <a href="/"> <li> assurance </li> </a>   
      <a href="/"> <li> batiment  </li> </a>   
      <a href="/"> <li>hotellerie   </li> </a>   
      <a href="/"> <li> agricole </li> </a>   
      <a href="/"> <li> Digital product </li> </a>   
      <a href="/"> <li> assurance </li> </a>   
      <a href="/"> <li> batiment  </li> </a>   
      <a href="/"> <li>hotellerie   </li> </a>   
      <a href="/"> <li> agricole </li> </a>   
      <a href="/"> <li> Digital product </li> </a>   
      <a href="/"> <li> assurance </li> </a>   
      <a href="/"> <li> batiment  </li> </a>   
      <a href="/"> <li>hotellerie   </li> </a>   
      <a href="/"> <li> agricole </li> </a>   
      <a href="/"> <li> Digital product </li> </a>   
     
      </ul>
    </div>

   

  </div>
</div>

 
 


            </div>
        )
    }
}
