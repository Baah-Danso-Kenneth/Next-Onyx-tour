import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/campalla.png'
import { AboutDropDown, DestinationDropDown, ShopDropDown, TabletNav} from './DropDown';
import { LeftSection, RighSection, ShopItems } from './NavItems';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'

function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const [about,setAbout]=useState(false)
  const [shop, setShop]=useState(false)
  const [scrolled, setScrolled]=useState(false)
  const [scrollPosition, setScrolledPosition]=useState(0)
  const [open,setOpen]=useState(false)


useEffect(()=>{
  const handleScroll=()=>{
    const scrollY = window.scrollY || document.documentElement.scrollTop
    setScrolledPosition(scrollY)
    const threshold=600;
    setScrolled(scrollY > threshold)
}

window.addEventListener('scroll',handleScroll)
return ()=>{
  window.removeEventListener('scroll', handleScroll)
}

},[])  
  return (
    <div className='block-nav'>
    <div className={scrolled ?'nav-container-fix cut-head':'nav-container-fix'}>
      <div className={scrolled ?"nav-container-fix-element center-elements":"nav-container-fix-element"}>

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
                       {dropDown && <div className={scrolled?"scrolled-destination":""}><DestinationDropDown/></div>}
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

        <div className={scrolled ?"middle-section remove-img":"middle-section"}>
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
                      {shop && <div className={scrolled ? "scrolled-shop":""}><ShopDropDown/></div>}
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
                      {about && <div className={scrolled ? "scrolled-about":""}><AboutDropDown/></div>}
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

        <div className="small-screen-nav">
          <div className="small-screen-nav-element">
              <div className={scrolled ?"icons icon-scrolled":"icons"}>
                {open? <CgClose onClick={()=>setOpen(false)}/> : <GiHamburgerMenu onClick={()=>setOpen(true)}/>}
              </div>
              <div className={scrolled?"logos img-logo":"logos"}>
                  <Image src={CompanyLogo} alt="company-logo"/>
                </div> 
          </div>
        </div>
      </div>  
    </div>
    {open &&  <TabletNav/>}
     </div>
  )
}

export default Navbar
