import React, { Component } from 'react'
import axios from 'axios' ; 

export default class EditNote extends Component {
    constructor(props) {
        super(props) ; 
        
        this.state = { 
          title : '' ,
          body :  ''
        } ; 
    
      }

      componentDidMount (){
          axios.get(`http://localhost:3200/note/${this.props.match.params.id}`)
                    .then( res => {
                        console.log(res.data.note_trouve) ; 
                        this.setState({
                            title : res.data.note_trouve.title, 
                            body : res.data.note_trouve.body  
                        }) ; 
                    }).catch(err => console.log(err)) ; 
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
    
        axios.put(`http://localhost:3200/note/update/${this.props.match.params.id}`,note)
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
      
        <label htmlFor="exampleFormControlInput1">Title </label>
     <div className="form-group">
         <input
        onChange={this.handleinputChange}
        value={this.state.title} 
        type="text" name="title" className="form-control" id="" placeholder="title"/>
      </div>
    
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description*</label>
        <textarea 
        onChange={this.handleinputChange}
        value={this.state.body}
        className="form-control" required  name="body" id="" placeholder="description de votre note" rows="3"></textarea>
      </div>
    
      <div className="form-group">
          <button className="btn btn-primary" type="submit" >Enregistrer</button>
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
