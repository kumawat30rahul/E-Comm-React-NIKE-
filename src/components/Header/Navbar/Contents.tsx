import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Contents.css';


function Contents() {

  const smallScreen = window.matchMedia("(max-width: 768px)").matches;
  const [activeSubmenu, setActivesSubmenu] = useState('');

  const showSubmenu = (type: any, e: any) => {
    console.log(activeSubmenu);

    if (activeSubmenu === type) {
      setActivesSubmenu('')
    } else {
      setActivesSubmenu(type)
    }
  }


  return (
    <div>
      <div className='main_contents'>
        {smallScreen ?
          <ul>
            <Link to='/' className='contents_links'>
              <li className="one">
                HOME
              </li>
            </Link>
            <div className='contents_links'>
              <li className={`two ${activeSubmenu === "mens" ? 'activeLi' : ''}`} onClick={(e: any) => showSubmenu('mens', e)}>
                MENS
                <div className={`mega_menu mens ${activeSubmenu === "mens" ? 'activesubmenu' : ''}`}>
                  <ul>
                    <li>Shirts</li>
                    <li>T-Shirts</li>
                    <li>Joggers</li>
                    <li>Shoes</li>
                    <li>Football</li>
                  </ul>
                </div>
              </li>
            </div>
            <div className='contents_links'>
              <li className={`three ${activeSubmenu === "womens" ? 'activeLi' : ''}`} onClick={(e: any) => showSubmenu('womens', e)}>
                WOMENS
                <div className={`mega_menu womens ${activeSubmenu === "womens" ? 'activesubmenu' : ''}`}>
                  <ul>
                    <li>Top</li>
                    <li>Pants and Leggings</li>
                    <li>Joggers</li>
                    <li>Shoes</li>
                    <li>Football</li>
                  </ul>
                </div>
              </li>
            </div>
            <div className='contents_links'>
              <li className={`four ${activeSubmenu === "kids" ? 'activeLi' : ''}`} onClick={(e: any) => showSubmenu('kids', e)}>
                KIDS
                <div className={`mega_menu kids ${activeSubmenu === "kids" ? 'activesubmenu' : ''}`} >
                  <ul>
                    <li>Shirts</li>
                    <li>T-Shirts</li>
                    <li>Joggers</li>
                    <li>Shoes</li>
                    <li>Football</li>
                  </ul>
                </div>
              </li>
            </div>
            <Link to='/shop/AllProducts' className='contents_links'>
              <li className="five">
                SHOP
              </li>
            </Link>
          </ul>
          :
          <ul>
            <Link to='/' className='contents_links'>
              <li className="one">
                HOME
              </li>
            </Link>
            <Link to={`/shop/Mens`} className='contents_links sdfasdfsdf'>
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
        }
      </div >
    </div >
  )
}

export default Contents