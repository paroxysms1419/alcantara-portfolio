import React from 'react'
import './Services.css'
import arrow from '../../assets/arrow.png'



const Services = () => {


    function Services_Data(s_no, s_name, s_desc) {
        return { s_no, s_name, s_desc};
      }
      
      // services static data
      const rows = [
        Services_Data(
        "01",
         "Website Design",
        "Our web design service offers a comprehensive solution to create a stunning and functional online presence for your business."
        ),
        Services_Data("02",
        "Graphic Design",
        "Our graphic design service provides high-quality visual solutions to help you communicate your message and establish your brand identity."
    
        ),
        
        Services_Data("03",
        "App Design",
        "Our app design service provides a comprehensive solution to create a user-friendly, intuitive, and visually appealing mobile application that meets your business needs and goals."
        ),
          
        Services_Data(
        "04",
        "Digital Marketing",
        "Our digital marketing service helps you reach and engage with your target audience through social media, search engine optimization, and other online channels."
    
        ),
        Services_Data(
        "05",
        "Frontend Development",
        "Our frontend development service focuses on creating fast, responsive, and user-friendly websites and applications using the latest technologies such as HTML, CSS, and JavaScript."
    
        ),
        Services_Data(
        "06",
        "UI/UX Design",
        "Our UI/UX design service ensures a seamless, user-friendly, and visually appealing experience for your digital products, focusing on usability and user engagement."
        )
      ];

  return (
    <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
            </div>
        <div className="services-container">
            {rows.map((row, index) => (
                <div key={index} className="services-format">
                    <h3>{row.s_no}</h3>
                    <h2>{row.s_name}</h2>
                    <p>{row.s_desc}</p>
                    <div className="services-readmore">
                    <p>Read More</p>
                    <img style={{width:'40px'}} src={arrow} alt="" />
                    </div>
                </div>
            ))} 
        </div>
    </div>

  )
}

export default Services
