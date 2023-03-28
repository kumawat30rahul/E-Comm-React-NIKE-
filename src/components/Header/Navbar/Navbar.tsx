import React, {useState} from 'react'
import Contents from './Contents';
import './Navbar.css';
import LOGO from './LOGO.png';
import Icons from './Icons'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import CloseIcon from '@mui/icons-material/Close';



function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarHandler = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className='main_navbar'>
      {/* <div className='second_navbar'> */}
        <div className='main_sidebar'>
          <div className='menu_btn' onClick={sidebarHandler}>
              <MenuIcon />
          </div>
            <div className={`open_sidebar ${openSidebar ? 'active' : ''}`}>
              <div className='close_btn' onClick={sidebarHandler}>
                <CloseIcon />
              </div>
              <div className="sidebar_contents">
                <Contents />
              </div>
            </div>
          {openSidebar && 
            <div className='sidebar_open_underlay'></div>
          }
        </div>
        <div className='fav_icon'>
            <FavoriteTwoToneIcon />
        </div>
        <div className='div_logo'>
          <img src={LOGO} alt='logo' className='logo'/>
        </div>
        <div className='content'>
          <Contents />
        </div>
        <div className='icons'>
          <div className='search_main'>
            <input className='search_input' type='text' placeholder='Search Here' />
            <div className='div_icon'>
              <SearchTwoToneIcon className='icon'/>
            </div>
          </div>
          <Icons />
        </div>
      {/* </div> */}
    </div>
  )
}

export default Navbar
