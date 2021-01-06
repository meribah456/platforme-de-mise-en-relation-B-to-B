import React from 'react'

export default function ContactUs() {
    return (
        <div className="container"> 
                <div className="row" >
                    <div className="col-md-10 my-4 mx-auto" >
                    <div className="card bg-light" >
    
                     <div className="card-header" ><center><h1>Contactez - nous ! </h1></center></div>
                     <div className="card-body" > 
 
  <form method="post" >
      
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Votre Email </label>
        <input
        
        type="email" name="email" required class="form-control" id="" placeholder="Email...."/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1"> Nom et Prenom  </label>
        <input
        type="name" name="name" required class="form-control" id="" placeholder="Votre Nom ....."/>
      </div>

      
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Laissez votre message</label>
    <textarea 
    
    class="form-control" required name="body" id="" placeholder="Laissez-vous votre message....." rows="3"></textarea>
  </div>
    
      <div className="form-group">
          <button className="btn btn-primary" type="submit" >Envoyer</button>
      </div>
    </form>
    </div>
</div></div>
</div></div>
 
    )
}
