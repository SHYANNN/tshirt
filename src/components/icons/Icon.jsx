import React from 'react'
import './icon.css'
import {FaPalette} from 'react-icons/fa'
import {ImStack} from 'react-icons/im'
import {TbShirt} from 'react-icons/tb'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

const icon = () => {
  return (
    <div className="icon__container">
      <div className="features">
        <p>Our Features</p>
      </div>
      <div className="icons">
        <div className="icon">
          <div className="img">
            <FaPalette className='art'/>
          </div>
          <div className="text">
            <h3>Unique Design</h3>
            <p>Jul 13 2025</p>
          </div>
        </div>
        <div className="icon">
          <div className="img">
            <ImStack className='art'/>
          </div>
          <div className="text">
            <h3>Quality Materials</h3>
            <p>Jul 15 2025</p>
          </div>
        </div>
        <div className="icon">
          <div className="img">
            <TbShirt className='art'/>
          </div>
          <div className="text">
            <h3>High Pint Quality</h3>
            <p>Jul 23 2025</p>
          </div>
        </div>
        <div className="icon">
          <div className="img">
            <BsFillEmojiSmileFill className='art'/>
          </div>
          <div className="text">
            <h3>Good Reviews</h3>
            <p>Jul 27 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default icon