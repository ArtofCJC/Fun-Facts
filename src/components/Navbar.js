import React from 'react'
import {Link, NavLink, } from 'react-router-dom'

const Navbar = (props) => {

  //const navigate = useNavigate()
    //setTimeout(() =>{
      //  navigate('/about')
    //},2000)
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a href='/' className='brand-logo'>Fun Facts</a>
        <ul className='right'>
            <li><Link to='/'>Fact 1</Link></li>
            <li><Link to='/fact2'>Fact 2</Link></li>
            <li><NavLink to='/fact3'>Fact 3</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar