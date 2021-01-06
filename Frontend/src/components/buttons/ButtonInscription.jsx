import React from 'react'
import {Link} from 'react-router-dom'


export default function ButtonInscription() {
    return (
        
        <div className="form-group">
        <Link className="btn btn-primary ml-2"   to="/inscription" >Inscription </Link>
        </div>
    )
}
