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
        <div className="nav-bar-content-image">
            <Image className='nav-bar-content-img' src={Logo} alt="company" width={200} height={100}/>
        </div>
         <li>2024 + 2025 calender</li>
      </div>

      <div className="nav-bar-content-3">
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
