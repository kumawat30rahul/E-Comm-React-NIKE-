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
          </li>
          </Link>
          <Link to={`/shop/Mens`} className='contents_links'>
          <li className="two">
            MENS
            <div className='mega_menu'>
              <ul>
                <li>Shirts</li>
                <li>T-Shirts</li>
                <li>Joggers</li>
                <li>Shoes</li>
                <li>Football</li>
              </ul>
            </div>
          </li>
          </Link>
          <Link to={`/shop/Womens`} className='contents_links'>
          <li className="three">
            WOMENS
            <div className='mega_menu'>
              <ul>
                <li>Top</li>
                <li>Pants and Leggings</li>
                <li>Joggers</li>
                <li>Shoes</li>
                <li>Football</li>
              </ul>
              </div>
          </li>
          </Link>
          <Link to={`/shop/Kids`} className='contents_links'>
          <li className="four">
            KIDS
            <div className='mega_menu'>
              <ul>
                <li>Shirts</li>
                <li>T-Shirts</li>
                <li>Joggers</li>
                <li>Shoes</li>
                <li>Football</li>
              </ul>
            </div>
          </li>
          </Link>
          <Link to={`/shop/AllProducts`} className='contents_links'>
          <li className="five">
            SHOP
          </li>
          </Link>
        </ul>
        
    </div>
    
    </div>
  )
}

export default Contents