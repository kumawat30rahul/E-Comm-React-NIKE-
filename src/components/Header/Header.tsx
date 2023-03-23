import React from 'react'
import Navbar from '../Header/Navbar/Navbar';
import Offers from '../Header/Offers';

function Header() {
  return (
    <div className='main_header'>
      <div className='offer'>
        <Offers />
      </div>
      <div className='Navbar'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header