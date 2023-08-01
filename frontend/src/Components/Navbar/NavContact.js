import React from 'react'
import './NavContact.css'
import {Link} from 'react-router-dom'

const NavContact = () => {
  return (
    <nav id="nav">
                <ul>
                <li><a href="two-sidebar.html"><Link to={'/'}  >Home</Link></a></li>
                <li><a href="two-sidebar.html"><Link to={'/list'}>ListContact</Link></a></li>
                <li><a href="two-sidebar.html"><Link to={'/add'}>Add Contact</Link></a></li>
                <li><a href="two-sidebar.html"><Link to={'/about'}  >About US</Link></a></li>
                <li><a href="two-sidebar.html"><Link to={'/'}  >Contact US</Link></a></li>
                </ul>
    </nav>
  )
}

export default NavContact