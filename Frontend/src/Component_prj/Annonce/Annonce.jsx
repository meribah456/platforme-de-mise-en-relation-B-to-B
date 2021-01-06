import React from 'react'
import './Annonce.css'
import im from '../../components/dd.jpg'
import img_fruits from '../images/img_fruits.jpg'
import img_financing from '../images/financing.jpg'
import img_insurance from '../images/Insurance.jpg'
import img_petrole from '../images/petrole.jpg'
import img_telecommunication from '../images/telecommunication.jpg'
import img_service from '../images/service.jpg'
import img_logistica from '../images/logistica.jpg'
import img_real from '../images/real.jpg'
import img_training from '../images/training.jpg'
import img_partnership from '../images/partnership.jpg'
import img_renewable from '../images/renewable.jpg'
import img_textile from '../images/textile.jpg'

export default function Annonce(props) {
    return (
<div > 

<div class="card  ml-4">
      <h2>{props.annonce.Titre_annonce}<h6>date de publication : {props.annonce.createdAt.substr(0,10)} à {props.annonce.createdAt.substr(11,5)}</h6>
      <h5 className="ml-2">  Annonceur de  {props.annonce.Pays_Annonceur} </h5>  </h2>
 
      {props.annonce.Theme_annonce=="Insurance" &&<img src={img_insurance} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Financing" &&<img src={img_financing} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Petrol_Gas_Mines" &&<img src={img_petrole} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Telecommunication" &&<img src={img_telecommunication} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Services" &&<img src={img_service} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Transport_Logistics_Storage" &&<img src={img_logistica} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Food_Beverage" &&<img src={img_fruits} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Real_Estate" &&<img src={img_real} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Training" &&<img src={img_training} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Projects_Partnerhip" &&<img src={img_partnership} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Renewable_Energy" &&<img src={img_renewable} alt="error uplod imge annoce" />  }         
      {props.annonce.Theme_annonce=="Textile_Industry" &&<img src={img_textile} alt="error uplod imge annoce" />  }         

  
 <h5 className="mt-2"> desccription annonce </h5>
     <p className="ml-3"> {props.annonce.Description_annonce}</p>
     </div>

</div>
    )
}
