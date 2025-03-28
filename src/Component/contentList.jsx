import React from 'react'
import { motion } from "motion/react"
import './contentList.css'
import Model from './Images/model.jpeg'
import TrueFocus from './TrueFocus.jsx'

// import TrueFocus from './TrueFocus';
// import { ShinyText } from "react-bits";
import RotatingText from './RotatingText.jsx'

function contentList() {



  return (
    <>

      <div className="Scontainer">
        <div className="S12">

          <div className="S44">

            <ul className='droptext flex gap-5 '>
              <li><h4 className='subtitle'>Elevate Your Viewing</h4></li>
              <li className='subtitle'>  <RotatingText
                texts={['3D', 'Movies', 'Like', 'Cool!']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center w-auto rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              /> </li>
            </ul>




            <h1 className="title">Unleash the Power of 3D </h1>

            <p className="description">Immerse yourself in a cinematic revolution where the screen becomes a gateway to boundless imagination. Our 3D movie selection promises to captivate your senses</p>
            <div className="cta-buttons">
              <a href="#" className="primary-btn">Discover Now</a>
              <a href="#" className="secondary-btn">Witness the Future</a>
            </div>
          </div>
          <br />

          <div className="S2">
            <img src="//cdn-imgs.dora.run/design/EWwThZy5Pz8KxAmpKmEObe.webp/w/4096/h/4096/format/webp?" alt="Movie promotion with two people" className="S3" />
            {/* <img src={Model} className="S3" /> */}
          </div>
        </div>
      </div>

      {/* <div className="Scontainer">
          <div className="S1">
            <div className="S223">
              <img src="//cdn-imgs.dora.run/design/HznFAM9N0xuKzhE5xsUlsB.webp/w/4096/h/4096/format/webp?" alt="Movie promotion with two people" className="S3" />

            </div>
            <br />
            <div className="S4">


              <p className="subtitle">Discover the Extraordinary</p>



              <h1 className="title">Immerse Yourself</h1>
              <p className="description">Prepare to be captivated by our stunning 3D movie selection, where the boundaries between reality and fantasy blur. Dive into a world of breathtaking visuals, captivating narratives, and unforgettable experiences that will leave you craving more</p>
              <div className="cta-buttons">
                <a href="#" className="primary-btn">
                  Explore Now
                </a>
                <a href="#" className="secondary-btn">Witness the Future</a>
              </div>
            </div>
            <br />
          </div>
        </div> */}


    </>
  )
}

export default contentList
