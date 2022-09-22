import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/error.scss'

const Error = () => {
  return (
    <div className='error-wrapper'>
      <div className='error'></div>
      <div>Oops, Seems you lost your way</div>
      <div>Let's get you back <Link to='/' >home</Link></div>
    </div>
  )
}

export default Error