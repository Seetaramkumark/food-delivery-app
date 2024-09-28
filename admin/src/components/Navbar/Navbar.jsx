import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logv} alt="" />
      <img className='profile' src={assets.pp} alt="" />
    </div>
  )
}

export default Navbar