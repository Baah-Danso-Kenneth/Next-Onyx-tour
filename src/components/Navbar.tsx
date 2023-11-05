import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/campalla.png'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'
import { AboutDropDown, DestinationDropDown, ShopDropDown } from './DropDown';
import { LeftSection, RighSection, ShopItems } from './NavItems';
import Link from 'next/link';


function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const [about,setAbout]=useState(false)
  const [shop, setShop]=useState(false)

  return (
    <div className='nav-container-fix'>
      <div className="nav-container-fix-element">

        <div className="right-section">
            <ul>
              {RighSection.map(({id,title,cName})=>{
                if(title==='destination'){
                    return(
                      <li
                      key={id}
                      className={cName}
                      onMouseEnter={()=>setDropDown(true)}
                      onMouseLeave={()=>setDropDown(false)}
                       >
                       <Link href="#" className='header-title'>{title}</Link>
                       {dropDown && <DestinationDropDown/>}
                      </li>
                    )
                }

                return(
                  <li key={id} className={cName}>
                    <Link href="#" className='list-itm'>{title}</Link>
                  </li>
                )
              })}
            </ul>
        </div>

        <div className="middle-section">
          <Image src={CompanyLogo} alt='company-logo' quality={100}/>
        </div>

        <div className="left-section">
           <ul>
              {LeftSection.map(({id,title,cName})=>{

                if(title==='shop'){
                  return(
                    <li key={id}
                    className={cName}
                    onMouseEnter={()=>setShop(true)}
                    onMouseLeave={()=>setShop(false)}
                    >
                      <Link href="#" className='header-title'>{title}</Link>
                      {shop && <ShopDropDown/>}
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
                      <Link href="#" className='header-title'>{title}</Link>
                      {about && <AboutDropDown/>}
                    </li>
                  )

                }
                else{
                  console.log('Onyx travels')
                }
                return(
                  <li key={id}>
                    <Link href="#" className='list-itm'>{title}</Link>
                  </li>
                )
              })}
              </ul>
        </div>
       
      </div>      
    </div>
  )
}

export default Navbar
