import React, { Component } from 'react'
import axios from 'axios'
import { Button} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default class FormulaireLogin extends Component {
    constructor(props) {
        super(props) ; 
        
        this.state = { 
          email : '' ,
          password :  '',
          typeCompte :''
        } ; 
    
      }
     
    
      handleinputChange = event =>{
        this.setState({
          [event.target.name] : event.target.value   
                    })
      } ; 
    
      handlformSubmit = event => {
        event.preventDefault() ; 
        const user_info ={
          email  : this.state.email , 
          password  : this.state.password ,
          typeCompte :this.state.typeCompte

         }
       
        axios.post('http://localhost:3200/userConnection',user_info)
                .then(res =>{
                 
                  if(res.data.user_trouve.length >0) {
                    console.log(res.data.user_trouve);
                    console.log(" Connnnectéééééééééééééééé");
                    {window.$statu_user=1 }
                    this.props.history.push('/') ; 
                  }
                  
                  else {
                      console.log("user n'exixste pas");
                  }    
                }).catch(err => console.log(err)) ; 

      }
        render() {
            return (
                
                    <div className="container"> 
                <div className="row" >
                    <div className="col-md-10 my-4 mx-auto" >
                    <div className="card bg-light" >
    
                    <center>   <div className="card-header" ><h3>  Connectez-vous ! </h3>  </div> </center> 
                     <div className="card-body" > 
            
         
     <form method="post"  onSubmit={this.handlformSubmit}>
  
      <div className="form-group ">
        <label htmlFor="exampleFormControlInput1">Saisir votre Email </label>
        <input
        onChange={this.handleinputChange}
        value={this.state.email} 
        type="email" name="email" required className="form-control" id="" placeholder="Email"/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Saisir votre Passwoord </label>
        <input
        onChange={this.handleinputChange}
        value={this.state.password} 
        type="password" name="password" required className="form-control" id="" placeholder="mot de pass"/>
      </div>

    
      <div className="form-group">
          <button className="btn btn-primary" type="submit" >Connecter </button>
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
