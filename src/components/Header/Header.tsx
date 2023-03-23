import React from 'react'
import Navbar from '../Header/Navbar/Navbar';
import Offers from '../Header/Offers';

function Header() {
  return (
    <div className='main_header'>
        <Offers />
        <Navbar />
    </div>
  )
}

export default Header