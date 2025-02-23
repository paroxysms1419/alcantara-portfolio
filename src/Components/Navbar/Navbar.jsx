import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/gar2.png'
import line from '../../assets/line.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_burger from '../../assets/menu1.png'
import menu_close from '../../assets/close.png'


const Navbar = () => {
 
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <>
      <div className='navbar'>
        
        <img style={{ width: "100px"}} src={logo} alt="" />
        <img onClick={openMenu} style={{ width: "60px"}} src={menu_burger} alt="" className='nav-mob-open' />
       
        <ul ref={menuRef} className='nav-menu'>
          <img onClick={closeMenu} style={{ width: "40px"}} src={menu_close} className="nav-mob-close"/>
         <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img style={{ width: "90px"}}  src={line} alt='' />:<></>}</li>
         <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img style={{ width: "90px"}}  src={line} alt='' />:<></>}</li>
         <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img style={{ width: "90px"}}  src={line} alt='' />:<></>}</li>
         <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img style={{ width: "90px"}}  src={line} alt='' />:<></>}</li>
         <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img style={{ width: "90px"}}  src={line} alt='' />:<></>}</li>
        </ul>
        <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
        </div>
       
      </div>

    </>
  )
}

export default Navbar
