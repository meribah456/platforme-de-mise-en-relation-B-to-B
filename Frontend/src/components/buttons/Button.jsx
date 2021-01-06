import React from 'react'
import {Link} from 'react-router-dom'


export default function Button() {
    return (
        <div>
        <div className="form-group">
        <Link className="btn btn-primary"   to="/" >Home</Link>
        <Link className="btn btn-primary"   to="/connection" >connection</Link>
  </div>
        </div>
    )
}
