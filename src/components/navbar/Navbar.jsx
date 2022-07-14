import React from 'react'
import './navbar.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="company__name">
          <h2>ToolM5</h2>
        </div>
        <div className="nav__links active">
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contacts</a></li>
            <li className='social'><a href="https:/facebook.com"><FaFacebookF/></a></li>
            <li className='social'><a href="https://twitter.com" ><AiOutlineTwitter/></a></li>
            <li className='social'><a href="https://instagram.com"><BsInstagram/></a></li>
            <li className='get'><a href="#" className='btn'>Get Started <IoIosArrowDroprightCircle className=''/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar