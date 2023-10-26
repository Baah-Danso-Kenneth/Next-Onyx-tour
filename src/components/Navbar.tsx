import React, { useEffect, useState } from 'react';
import Logo from '../../public/assets/images/crafted-logo.png';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';

function Navbar() {
  const [hideImage, setHideImage] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [showDestination, setShowDestination] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = 500;
      setHideImage(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`nav-bar ${hideImage ? 'cut-head' : ''}`}>
      <div className={`nav-bar-content ${hideImage ? 'align-items' : ''}`}>
        <div className={`nav-bar-content-1 ${hideImage ? 'show-custom-li' : ''}`}>
          <ul>
            <li>small group trips</li>
            <li className='destination-point'
            onMouseEnter={()=>setShowDestination(true)}
            onMouseLeave={()=>setShowDestination(false)}
            >
                destinations
            </li>
          </ul>
        </div>

        <div className={`nav-bar-content-2 ${hideImage ? 'show-li' : ''}`}>
          <div className={`nav-bar-content-image ${hideImage ? 'hide-image' : ''}`}>
            <Image className="nav-bar-content-img" src={Logo} alt="company" width={200} height={100} />
          </div>
          <li>2024 + 2025 calender</li>
        </div>

        <div className={`nav-bar-content-3 ${hideImage ? 'custom-li' : ''}`}>
          <ul>
            <li>custom trips</li>
            <li
            onMouseEnter={()=>setShowShop(true)}
            onMouseLeave={()=>setShowShop(false)}
            >
                shop
            </li>
            <li
            onMouseEnter={()=>setShowAbout(true)}
            onMouseLeave={()=>setShowAbout(false)}
            
            >
                about
            </li>
          </ul>
        </div>

        <div className="nav-bar-icon-container">
          {iconToggle ? (
            <CgClose
              onClick={(e:any) => {
                e.stopPropagation();
                setIconToggle(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e:any) => {
                e.stopPropagation();
                setIconToggle(true);
              }}
            />
          )}
        </div>
      </div>

      <div className="nav-items-sm-screen">
        {showDestination ? (
        <div className='destination'>
          <ul>
            <li>Eastern</li>
            <li>Western</li>
            <li>West Coast</li>
          </ul>
        </div>
        ) : ""}

    
     {showShop ? (
         <div className='shop'>
          <ul>
            <li>wild terrains shop</li>
            <li>lauren pick</li>
          </ul>
        </div>

     ) : ""}



       {showAbout ? (
        <div className='about'>
          <ul>
            <li>our story</li>
            <li>our team</li>
            <li>in the news</li>
            <li>faqs</li>
            <li>say hello</li>
          </ul>
        </div>
       ) : ""}
   

      </div>
    </div>
  );
}

export default Navbar;
