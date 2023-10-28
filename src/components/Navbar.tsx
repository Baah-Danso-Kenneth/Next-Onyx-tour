import React, { useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/campalla.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'

function Navbar() {
  const [responsive,setResponsive]=useState(false)
  return (
    <div className='nav-container'>
        <div className="nav-container-element">
            <div className='right-section'>
                <p>small group trips</p>
                <p>destinations</p>
            </div>

            <div className="logo">
                <Image src={CompanyLogo} alt='company-logo' quality={100}/>
            </div>

            <div className='last-section'>
                <p>custom trips</p>
                <p>shop</p>
                <p>about</p>
            </div>

            <div className="icon-for-mobile-tablet">
                <div className='icon-content'>
                {responsive ? (<CgClose onClick={()=>setResponsive(false)}/>) : (<GiHamburgerMenu onClick={()=>setResponsive(true)}/>) }
                </div>
            </div>

            <div className="logo-for-mobile-tablet">
                <Image src={CompanyLogo} alt="company-logo"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
