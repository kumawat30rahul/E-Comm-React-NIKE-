import React, { useEffect, useState } from 'react'
import './Icons.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

function Icons() {

  const [open,setOpen] = useState<any>(false)

  const openHandler = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     const sidebar = document.querySelector('.dialog_account');
  //     if (open && sidebar && !sidebar.contains(event.target as Node)) {
  //       setOpen(false);
  //     }
  //   };
  
  //   document.addEventListener('mousedown', handleOutsideClick);
  
  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, [open]);

  return (
    <div className='main_icons'>
      <Link to='/cart' className='icon_link'>
        <div className='shop'>
            <ShoppingBagTwoToneIcon />
        </div>
        </Link>
        <Link to='/fav' className='icon_link'>
        <div className='fav'>
            <FavoriteTwoToneIcon />
        </div>
        </Link>
        <div className='acc' onClick={openHandler}>
        <Avatar sx={{bgcolor: 'black'}}>
            <AccountCircleSharpIcon />
        </Avatar>
        {open && 
          <div className="dialog_account" >
            <Link to='/signup' className='account_link'>
             <p className='first'>SignUP</p>
            </Link>
            <Link to='/login' className='account_link'>
              <p className='second'>Login</p>
            </Link>
            <Link to='/cart' className='account_link'>
             <p className='third'>Cart</p>
            </Link>
          </div>
        }
        </div>
    </div>
  )
}

export default Icons