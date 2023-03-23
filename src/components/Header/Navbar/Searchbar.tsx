import React from 'react'
import '../../../Css/Searchbar.css';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


function Searchbar() {
  return (
    <div className='search_main'>
        <input className='search_input' type='text' placeholder='Search Here' />
        <div className='div_icon'>
         <SearchTwoToneIcon className='icon'/>
        </div>
    </div>
  )
}

export default Searchbar