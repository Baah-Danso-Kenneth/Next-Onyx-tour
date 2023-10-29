import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/campalla.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'

function Navbar() {
  const [responsive,setResponsive]=useState(false)
  const [scrollPosition, setScrollPosition]=useState(0)
  const [scrolled, setScrolled]=useState(false)
  const [isDestinationHover, setIsDestinationHover]=useState(false)
  const [isShopHover, setIsShopHover]=useState(false)
  const [isAboutHover, setIsAboutHover]=useState(false)


  useEffect(()=>{
    function handleScroll(){
        const scrollY= window.scrollY || document.documentElement.scrollTop
        setScrollPosition(scrollY)
        setScrolled(scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll);

    return ()=>{
        window.removeEventListener('scroll', handleScroll)
    }
  },[])



  return (
    <div className={`nav-container ${scrolled && 'nav-increase'}`}>
        <div className="nav-container-element">
            <div className='right-section'>
                <p>small group trips</p>
                <p onMouseEnter={()=>setIsDestinationHover(true)} onMouseLeave={()=>setIsDestinationHover(false)}>destinations</p>
            </div>

           {scrolled ? " " : (
             <div className="logo">
                <Image src={CompanyLogo} alt='company-logo' quality={100}/>
            </div>

           )}


            <div className='last-section'>
                <p>custom trips</p>
                <p onMouseEnter={()=>setIsShopHover(true)} onMouseLeave={()=>setIsShopHover(false)}>shop</p>
                <p onMouseEnter={()=>setIsAboutHover(true)} onMouseLeave={()=>setIsAboutHover(false)}>about</p>
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

        <div className="hover-state-container">

            {isDestinationHover ?
              (
            <div className={`destination ${scrolled && 'element-down-destination'}`}>
                <ul>
                    <li>Volta region</li>
                    <li>Central region</li>
                    <li>Easter region</li>
                    <li>Kente Movement</li>
                    <li>2024 + 2025 Calender</li>
                </ul>
            </div>
              )
             :
             ""}

            { isShopHover ?
                (
               <div className={`shop ${scrolled && 'element-down-shop'}`}>
                  <ul>
                    <li>Laurens pick</li>
                     <li>Onyx zone</li>
                  </ul>
               </div>
                )
                :
                ""
            }

          {
            isAboutHover ? 
             (
             <div className={`about ${scrolled && " element-down-about" }`}>
                <ul>
                    <li>Our story </li>
                    <li>In the news</li>
                    <li>faqs</li>
                    <li>Say hello</li>
                </ul>
            </div>
             )
             :
             ""
          }


        </div>

    </div>
  )
}

export default Navbar
