import React from 'react'
import { Link } from 'react-router-dom';
import './Contents.css';


function Contents() {
  return (
    <div>
    <div className='main_contents'>
        <ul>
          <Link to='/' className='contents_links'>
          <li className="one">
            HOME
            <div className='mega_menu'>
              MEGA MENU
            </div>
          </li>
          </Link>
          <Link to={`/shop/Mens`} className='contents_links'>
          <li className="two">
            MENS
            <div className='mega_menu'>
              MEGA MENU MENS
            </div>
          </li>
          </Link>
          <Link to={`/shop/Womens`} className='contents_links'>
          <li className="three">
            WOMENS
            <div className='mega_menu'>
              MEGA MENU WOMENS
            </div>
          </li>
          </Link>
          <Link to={`/shop/Kids`} className='contents_links'>
          <li className="four">
            KIDS
            <div className='mega_menu'>
              MEGA MENU KIDS
            </div>
          </li>
          </Link>
          <Link to={`/shop/AllProducts`} className='contents_links'>
          <li className="five">
            SHOP
            <div className='mega_menu'>
              MEGA MENU SHOP
            </div>
          </li>
          </Link>
        </ul>
        
    </div>
    
    </div>
  )
}

export default Contents