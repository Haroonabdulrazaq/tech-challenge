import React from 'react';
import { Link } from 'react-router-dom';
// import './error.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

function BackButton() {

  return (
    <Link to='/categories'
      className="button icon-left">
      <BsFillArrowLeftCircleFill className='back-arrow' />Back
    </Link>
  )
}

export default BackButton;