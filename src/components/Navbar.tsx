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
  const [showDestination, setShowDestinations]=useState(false)
  const [showShop, setShowShop]=useState(false)
  const [showAbout, setShowAbout]=useState(false)


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
            {scrolled ? " " : (<div className="logo-for-mobile-tablet"><Image src={CompanyLogo} alt="company-logo"/></div> )}
       
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

        {responsive ? (
        <div className="tablet-mobile-nav">
           <div className="first-section">
               <div className='smg-t'>Small group trips</div>

                <div className='bucket-list'>
                    <div className="controller">
                        {showDestination ? <p onClick={()=>setShowDestinations(false)}>-</p> : <p onClick={()=>setShowDestinations(true)}>+</p>}
                        <p>Destinations</p>
                    </div>
                    {showDestination ? (
                      <ul>
                        <li>Eastern Region</li>
                        <li>Western Region</li>
                         <li>Greater Accra </li>
                    </ul>
                    ) : ""}

                </div>

            </div>

           <div className="second-section">
              <div className='custm-t'>custom Trips</div>
              <div className='shop-content'>
              <div className="controller">
                {showShop ? <p onClick={()=>setShowShop(false)}>-</p> : <p onClick={()=>setShowShop(true)}>+</p>}
                <p>Shop</p>
              </div>
             {showShop ? (
             <ul>
                <li>lauren pics</li>
                <li>wild terrains show</li>
             </ul>
             ) : ""}

             </div>


            <div className='about-content'>
              <div className="controller">
               { showAbout ?  <p className='plus' onClick={()=>setShowAbout(false)}>-</p> : <p className='plus' onClick={()=>setShowAbout(true)}>+</p>}
                <p>About</p>
              </div>
             
             {showAbout ? (
               <ul>
                <li>our story</li>
                <li>our team</li>
                <li>in the news</li>
                <li>faqs</li>
                <li>say hello</li>
             </ul>

             ) : ""}

             </div>

           </div>
      </div>

        ) : ""}



    </div>
  )
}

export default Navbar
