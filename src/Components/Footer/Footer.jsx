import React from 'react'
import './Footer.css'
import logo from '../../assets/gar2.png'
import user from '../../assets/user.png'


const Footer = () => {
 

  return (
    <>
      <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
               <img style={{ width: "100px", height: "auto" }} src={logo} alt="" />
                <p>I'm a frontend developer, my primary focus is on creating the user interface and user experience of a website or web application.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                     <img style={{width:'40px'}} src={user} alt="" />
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>© 2025 Gar. All rights reserved</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
       
      </div>

    </>
  )
}

export default Footer
