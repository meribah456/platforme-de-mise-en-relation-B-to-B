import React, { Component } from 'react'
import axios from 'axios'

class AddNote extends Component {

  constructor(props) {
    super(props) ; 
    
    this.state = { 
      title : '' ,
      body :  ''
    } ; 

  }
 

  handleinputChange = event =>{
    this.setState({
      [event.target.name] : event.target.value   
                })
  } ; 

  handlformSubmit = event => {
    event.preventDefault() ; 
    const note ={
      title : this.state.title , 
      body  : this.state.body 
    }

    axios.post('http://localhost:3200/note/add',note)
            .then(res =>{
              this.setState({
                title :"" , 
                body : ""
              }) ; 

              this.props.history.push('/') ; 


            }).catch(err => console.log(err)) ; 
  }


  
    render() {
        return (
            
                <div className="container"> 
            <div className="row" >
                <div className="col-md-10 my-4 mx-auto" >
                <div className="card bg-light" >

                 <div className="card-header" >Ajouter Une Note</div>
                 <div className="card-body" > 
        
     
 <form method="post"  onSubmit={this.handlformSubmit}>
  
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Title </label>
    <input
    onChange={this.handleinputChange}
    value={this.state.title} 
    type="text" name="title" class="form-control" id="" placeholder="title"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Description*</label>
    <textarea 
    onChange={this.handleinputChange}
    value={this.state.body}
    class="form-control" required name="body" id="" placeholder="description de votre note" rows="3"></textarea>
  </div>

  <div className="form-group">
      <button className="btn btn-primary" type="submit" >Valider</button>
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
export default   AddNote ;