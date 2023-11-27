import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/onyxx-logo.png'
import Link from 'next/link'
import { LeftSection, RighSection } from './NavBarItems'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'
import {TfiPlus} from 'react-icons/tfi'
import { TfiMinus } from 'react-icons/tfi'
import { AboutDropDown, DestinationDropDown } from './DropDown'


function Navbar() {
const [scrolled,setScrolled]=useState(false)
const [scrollPosition, setSCrollPosition]=useState(0)
const [open,setOpen]=useState(false)
const [toggleDestination,setToggleDestination]=useState(false)
const [toggleAbout,setToggleAbout]=useState(false)
const [dropDown, setDropDown]=useState(false)
const [about,setAbout]=useState(false)

 useEffect(()=>{
  const handleScroll=()=>{
    const scrollY = window.scrollY || document.documentElement.scrollTop
    setSCrollPosition(scrollY)
    const threshold = 500
    setScrolled(scrollY > threshold)
  }

  window.addEventListener('scroll',handleScroll)
  return()=>{
    window.removeEventListener('scroll', handleScroll)
  }
 },[])
  return (
    <div className={scrolled ?'increase-padding height-annex': 'nav-bar-container'}>

      <div className='nav-bar-container-elements'>

        <div className={scrolled ? "right-section shoot-up": "right-section"}>
            <ul>
            {RighSection.map(({id,title,cName,path})=>{
                if(title==='group trips'){
                    return(
                      <li
                      key={id}
                      className={cName}
                      onMouseEnter={()=>setDropDown(true)}
                      onMouseLeave={()=>setDropDown(false)}
                       >
                       <Link href={path} className='list-item'>{title}</Link>
                       {dropDown && <div className={scrolled ? "scrolled-destination" : ""}><DestinationDropDown/></div>}
                      </li>
                    )
                }

                return(
                  <li key={id} className={cName}>
                    <Link href={path} className='list-item'>{title}</Link>
                  </li>
                )
              })}

            </ul>
        </div>

        <div className={scrolled ? 'hide-middle-section':'middle-section'}>
          <Image src={CompanyLogo} alt='company-logo' quality={100}/>
        </div>

        <div className={scrolled ? "left-section shoot-up shift-text": "left-section"}>
           <ul>
            {LeftSection.map(({id,title,cName})=>{

                if(title==='shop'){
                  return(
                    <li key={id}>
                    <Link href="/shop/shop_page" className="list-item">{title}</Link>
                    </li>
                  )
                }

                else if(title==='about'){
                  return(
                    <li key={id}
                    className={cName}
                    onMouseEnter={()=>setAbout(true)}
                    onMouseLeave={()=>setAbout(false)}
                    >
                      <Link href="#" className='list-item'>{title}</Link>
                      {about && <div className={scrolled ? 'scrolled-about': ''}><AboutDropDown/></div>}
                    </li>
                  )

                }
                else{
                  console.log('Onyx travels')
                }
                return(
                  <li key={id}>
                    <Link href="#" className='list-item'>{title}</Link>
                  </li>
                )
              })}
              </ul>
        </div>

      <div className="menu-icon">
        {open  ? <CgClose onClick={()=>setOpen(!open)}/>  : <GiHamburgerMenu onClick={()=>setOpen(!open)}/>}
      </div>

     <div className="tablet-mobile-icon">
        <Image src={CompanyLogo} alt='company-logo' quality={100}/>
     </div>

      </div>  

   {open && (
        <div className="sidebar">

          <div className="sidebar-elements">

              <div className="home">
                <Link href="/" className='header-title' >Home</Link>
              </div>

                  <div className="sidebar-destination">
                      <div className="icons-text">
                        {toggleDestination ? <TfiMinus  className='icon'onClick={()=>setToggleDestination(false)}/> : <TfiPlus  className='icon'onClick={()=>setToggleDestination(true)}/>}
                        <h3>destination</h3>
                      </div>
                      {toggleDestination && (
                       <ul>
                        <Link href="/group-trip/winter" className='header-title'>winter trip</Link>
                        <Link href="/group-trip/summer" className='header-title'>summer trip</Link>
                      </ul>

                      )}         
                 </div>

                 <div className="sidebar-gallery">
                    <Link href="/gallery" className='header-title'>Gallery</Link>
                </div>

                <div className="custom-trips">
                    <Link href="/custom-trip" className="header-title">Custom trips</Link>
                </div>

                 <div className="shop-trips">
                    <Link href="/shops/shop" className="header-title">shop</Link>
                </div>

              

                <div className="sidebar-about">
                      <div className="icons-text">
                        {toggleAbout ? <TfiMinus  className='icon'onClick={()=>setToggleAbout(false)}/> : <TfiPlus  className='icon'onClick={()=>setToggleAbout(true)}/>}
                        <h3>About</h3>
                      </div>
                      {toggleAbout && (
                       <ul>
                        <Link href="/group-trip/winter" className='header-title'>our team</Link>
                        <Link href="/group-trip/summer" className='header-title'>our story</Link>
                      </ul>

                      )}         
                 </div>
               


          </div>
      </div>
   )}



    </div>
  )
}

export default Navbar





export function FullNavbar() {

  return (
    <div className='nav-bar-container'>

      <div className='nav-bar-container-elements'>

        <div className="right-section">
            <ul>
            {RighSection.map(({id,title,cName,path})=>{
                if(title==='group trips'){
                    return(
                      <li
                      key={id}
                      className={cName}
                       >
                       <Link href={path} className='list-item'>{title}</Link>
                      </li>
                    )
                }

                return(
                  <li key={id} className={cName}>
                    <Link href={path} className='list-item'>{title}</Link>
                  </li>
                )
              })}

            </ul>
        </div>

        <div className='middle-section'>
          <Image src={CompanyLogo} alt='company-logo' quality={100}/>
        </div>

        <div className='left-section'>
           <ul>
            {LeftSection.map(({id,title,cName})=>{

                if(title==='shop'){
                  return(
                    <li key={id}>
                    <Link href="/shop/shop_page" className="list-item">{title}</Link>
                    </li>
                  )
                }

                else if(title==='about'){
                  return(
                    <li key={id}
                    >
                      <Link href="#" className='list-item'>{title}</Link>
                    </li>
                  )

                }
                else{
                  console.log('Onyx travels')
                }
                return(
                  <li key={id}>
                    <Link href="#" className='list-item'>{title}</Link>
                  </li>
                )
              })}
              </ul>
        </div>

      <div className="menu-icon">
         <CgClose/>
      </div>


      </div>  

    </div>
  )
}

