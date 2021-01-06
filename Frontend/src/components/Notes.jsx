import React, { Component } from 'react'
import axios from 'axios' ; 
import {Link} from 'react-router-dom' ; 

class Notes extends Component {

    state = {
        notes : []
    }

    componentDidMount() {
        this.getNotes_from_backend() ;
    }

    getNotes_from_backend =()=> {
        axios.get('http://localhost:3200/notes')
                .then(res => {
                    this.setState({
                        notes : res.data.notes 
                    });
                }).catch(err => console.log(err)) ; 
    }

    deletenote = id => {
        
        axios.delete('http://localhost:3200/note/delete/'+ id)
            .then(res => {
                this.setState({
                   notes : this.state.notes.filter( item =>item._id !=id )
                }) 
            }).catch(err => console.log(err)) ; 
    }
    render() {
        console.log(this.state.notes) ;

        {/* recuperation les note de state */}
        const {notes} = this.state ; 

         return (
            <div className="container"> 
            <div className="row" >
                <div className=" col-md-10  my-4 mx-auto" >

        
                 <table className="table">
 
  <thead>
    <tr>
    <th scope="col">id</th>
    <th scope="col">titre</th>
    <th scope="col">description</th>
    <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>

{ notes.length >0 && notes.map (note_selectionner =>( 
    <tr key={note_selectionner._id}>
        <td>{note_selectionner._id}</td>
        <td>{note_selectionner.title}</td> 
        <td>{note_selectionner.body}</td>  
        <td>
            <a 
               onClick ={()=> this.deletenote(note_selectionner._id)} 
               className= "btn btn-sm btn-danger text-white ">
                   Supprimer
            </a>

            <Link 
            to={`/edit/note/${note_selectionner._id}` }
            className= "btn btn-sm btn-warning text-white " > modifier</Link>

        </td>
    </tr>
))}
    
    
  </tbody>
</table>
            </div>
            </div> </div>
        )
    }
}
export default Notes ; 
