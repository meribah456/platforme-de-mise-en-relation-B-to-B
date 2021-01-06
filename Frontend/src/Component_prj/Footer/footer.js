import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>A propos Best Afrik </h4>
            <ul >
            <li >Home</li>
              <li>Temoignages</li>
              <li>Annuaire producteur & grossiste</li>
              <li>Conditions generales & infos legales</li>
            </ul>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>Services Best Afrik</h4>
            <ul>
              <li>Aide</li>
              <li>Inscription</li>
              <li>Acces espace membre</li>
              <li>Espace Publicite</li>
            </ul>
          </div>

          {/* Column3 */}

          <div className="col">
            <h4>Autres informations</h4>

            <ul>
              <li>Règlement</li>
              <li>Publicité</li>
              <li>Qui sommes-nous ?</li>
            </ul>
          </div>
        </div>


        <hr />
        <div className="row">
          <p className="col-sm p ">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
