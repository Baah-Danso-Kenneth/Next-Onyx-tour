import React from 'react'
import Logo from '../../public/assets/images/onyx_logo.png';
import Image


from 'next/image';
function Navbar() {
  return (
    <div className="nav-bar-content">

      <div className="nav-bar-content-1">
        <ul>
          <li>small group trips</li>
          <li>destinations</li>
        </ul>
      </div>
      
      <div className="nav-bar-content-2">
        <div className="navbar-content-image">
            <Image  src={Logo} alt="company" width={150} height={150}/>
        </div>
         <li>2024 + 2025 calender</li>
      </div>

      <div className="nav-baar-content-3">
        <ul>
          <li>custom trips</li>
          <li>shop</li>
          <li>about</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
