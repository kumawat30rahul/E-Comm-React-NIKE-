import React from 'react'
import Navbar from '../Header/Navbar/Navbar';
import Offers from '../Header/Offers';
import {motion} from 'framer-motion'
import './Header.css'

function Header() {
  return (
    <div className='main_header'>
      <motion.div
        initial={{y:-20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1}}
      >
        <Offers />
        <Navbar />
      </motion.div>
    </div>
  )
}

export default Header