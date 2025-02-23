import React from 'react'
import './About.css'
import profile_img from '../../assets/dp1.jpg'
import pl from '../../assets/all.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import figma from '../../assets/figma.png'
import react from '../../assets/react.png'



const About = () => {
 

  return (
    <>
      <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img style={{ width: "300px", height: '50vh'}} src={profile_img} alt="" />
            <img style={{ marginTop: '60px', width: "300px", height: '50vh'}} src={pl} alt="" />
            
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I'm a frontend developer, my primary focus is on creating the user interface and user experience of a website or web application.</p>
                    <p>I work with various programming languages such as HTML, CSS, and JavaScript to design and develop visually appealing and interactive client-side functionality.</p>
                    <p>My responsibilities include building responsive layouts, implementing navigation menus, and integrating multimedia elements to ensure a seamless user experience across different devices and browsers. By combining technical skills with creativity, I strive to craft intuitive and engaging interfaces that meet the needs of users and exceed their expectations.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><img style={{width: '50px'}} src={html} alt="" /> <p>HTML</p><hr style={{width:'80%'}} /> </div>
                    <div className="about-skill"><img style={{width: '50px'}} src={css} alt="" /> <p>CSS</p><hr style={{width:'75%'}} /> </div>
                    <div className="about-skill"><img style={{width: '50px'}} src={react} alt="" /> <p>React JS</p><hr style={{width:'70%'}} /> </div>
                    <div className="about-skill"><img style={{width: '50px'}} src={js} alt="" /> <p>JavaScript</p><hr style={{width:'50%'}} /> </div>
                    <div className="about-skill"><img style={{width: '50px'}} src={figma} alt="" /> <p>Figma</p><hr style={{width:'40%'}} /> </div>
                    
                </div>
            </div>
            
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>0</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>

      </div>

    </>
  )
}

export default About
