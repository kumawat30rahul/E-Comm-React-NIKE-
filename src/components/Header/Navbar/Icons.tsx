import React from 'react'
import './Icons.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

function Icons() {
  return (
    <div className='main_icons'>
        <div className='shop'>
            <ShoppingBagTwoToneIcon />
        </div>
        <div className='fav'>
            <FavoriteTwoToneIcon />
        </div>
        <div className='acc'>
            < AccountCircleSharpIcon />
        </div>
    </div>
  )
}

export default Icons