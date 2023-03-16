import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navs'>
        <div className='logos'>
            <Link to='/'>
                <img src={logo} className="logos-img"/>
            </Link>
        </div>
        <ul className='links'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
