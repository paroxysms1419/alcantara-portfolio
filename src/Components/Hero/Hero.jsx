import React from 'react'
import './Hero.css'
import profile_img from '../../assets/dp1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
 

  return (
    <>
      <div id='home' className='hero'>
        <img style={{ width: "300px", borderRadius: "60%" }} src={profile_img} alt="" />
        <h1><span>I'm Gar,</span> Web Developer from San Roque, Legazpi City.</h1>
        <p>Currently in my 4th year studying Bachelor of Science in Information Technology at Forbes College. </p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">
                My resume
            </div>
        </div>
       
      </div>

    </>
  )
}

export default Hero
