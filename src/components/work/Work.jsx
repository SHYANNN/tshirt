import React from 'react'
import './work.css'
import Man from '../../assets/man.jpg'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

const Work = () => {
  return (
    <div className="work__container">
      <div className="how">
        <h1>How it works?</h1>
      </div>
      <div className="boxes">
        <div className="box1">
          <div className="img">
            <img src={Man} alt="t-shirt guy" />
          </div>
          <div className="unique">
            <h1>Unique T-Shirt</h1>
          </div>
          <div className="buttons">
            <div className="button">
            <a href="#" className="ctn wtn">Buy for $59</a>
            </div>
            <div className="button">
              <a href="#" className="ctn "> View all <IoIosArrowDroprightCircle className='arrow'/> </a>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="heading">
            <p>Unique T-shirt Design</p>
          </div>
          <div className="underline"></div>
          <div className="lorem">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto maxime illo, perspiciatis, blanditiis facere, architecto repellendus voluptatum fuga minus optio dolorum.</p>
          </div>
          <div className="lorem lb">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto maxime illo, perspiciatis, blanditiis facere, architecto repellendus voluptatum fuga minus optio dolorum.</p>
          </div>
          <div className="space"></div>
          <div className="buttons">
            <div className="button">
            <a href="#" className="ctn wtn">Subscribe $79/q</a>
            </div>
            <div className="button">
              <a href="#" className="ctn"> More info <span><IoIosArrowDroprightCircle className='arrow'/></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work