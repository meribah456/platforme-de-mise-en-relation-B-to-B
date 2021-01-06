import React , { Fragment }  from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import im1 from './a.jpg'
import im2 from './dd.jpg'
import im3 from './b.jpg'
import  './posi.css'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
 

import ButtonLogin from './buttons/ButtonLogin'
 
import ButtonInscription from './buttons/ButtonInscription'

const pStyle = {
  position: 'absolute',
  right: '26px'} 
 
function NavBar() {
  return (

    <div >
      
<header >
    
 { /*        <Card className="bg-dark text-white  " style={{ height: "90px" }} >
<Card.Img src={logo} alt="Card image" />
<Card.ImgOverlay>
 
  <Card.Text style={{ ...pStyle, bottom: "30px" }}>
      Grossistes, producteurs, fabricants, fournisseurs ...
  </Card.Text>
  <Card.Text style={{ ...pStyle, bottom: "8px" }}>
  Vous cherchez, nous trouvons</Card.Text>
</Card.ImgOverlay>
</Card>
  */}

  <div className="pos" >
  <img src={logo} alt="Snow" />
   <div class="top-right">Grossistes, producteurs, fabricants, fournisseurs ... </div>
  <div class="bottom-right" >Vous cherchez, nous trouvons</div>
</div>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src= {im1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src= {im2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src= {im3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</header> 




<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to="/">Accueil </Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav">
    <Link className="nav-link " to="MonCompte">Mon Compte<span className="sr-only">(current)</span></Link>
     <Link className="nav-link" to="/DeposerAnnonce">Deposer une annonce</Link>
    <Link className="nav-link" to="/Payment">Payment</Link>
    <Link className="nav-link" to="/ContactUs">Contuct us </Link>
    <Link className="nav-link" to="/About">About us </Link>

   
  </div>
 </div>


   <div className="ar" >
      <Link className="btn btn-primary ml-2 mr-2" to="/inscription"  role="button">s'inscrire</Link>
      <Link className="btn btn-primary mr-2" to="/connection"   role="button">Connecter</Link>
   </div>

</nav>
 

</div>
  )
}
export default NavBar ;