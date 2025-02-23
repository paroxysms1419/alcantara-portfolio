import React from 'react'
import './MyWork.css'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.png'
import arrow from '../../assets/arrow.png'


const MyWork = () => {
    
    function Services_Data(w_no, w_name, w_img) {
        return { w_no, w_name, w_img};
      }
      
      // services static data
      const rows = [
        Services_Data(
        "01",
         "Website Design",
        <img style={{width:'450px'}} src={project1} alt="" />
        ),
        Services_Data("02",
        "Graphic Design",
        <img style={{width:'450px'}} src={project2} alt="" />
    
        ),
        
        Services_Data("03",
        "App Design",
        <img style={{width:'450px'}} src={project3} alt="" />
        )
      ];

  return (
    <>
      <div id='portfolio' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
       <div className="mywork-container">
             {rows.map((row, index) => (
                <div key={index}>
                    {row.w_img}
                </div>
            ))} 
       </div>
       <div className="mywork-showmore">
        <p>Show More</p>
         <img style={{width:'35px', alignItems:'center'}} src={arrow} alt="" />
       </div>
      </div>

    </>
  )
}

export default MyWork
