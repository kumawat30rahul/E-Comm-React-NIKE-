import React from 'react'
import './Icons.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Link } from 'react-router-dom';

function Icons() {
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
        <div className='acc'>
            < AccountCircleSharpIcon />
        </div>
    </div>
  )
}

export default Icons