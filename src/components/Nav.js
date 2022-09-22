import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/nav.scss'

const Nav = () => {
  return (
    <div className='nav-wrapper'>
      <h3><Link to='/' className='nav-link'>Tech Challenge</Link></h3>
      <div className='nav-content'> 
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/categories' className='nav-link' >Categories</Link>
        <Link to='/people' className='nav-link' >People</Link>
      </div>
    </div>
  )
}

export default Nav