import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/onyxx-logo.png'
import { AboutDropDown, DestinationDropDown, ShopDropDown} from './DropDown';
import { LeftSection, RighSection, ShopItems } from './NavItems';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'
import {TfiPlus} from 'react-icons/tfi'
import { TfiMinus } from 'react-icons/tfi'

function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const [about,setAbout]=useState(false)
  const [shop, setShop]=useState(false)
  const [scrolled, setScrolled]=useState(false)
  const [scrollPosition, setScrolledPosition]=useState(0)
  const [toggleDestination,setToggleDestination]=useState(false)
  const [toggleshop,setToggleShop]=useState(false)
  const [toggleAbout,setToggleAbout]=useState(false)

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
              {RighSection.map(({id,title,cName,path})=>{
                if(title==='group trips'){
                    return(
                      <li
                      key={id}
                      className={cName}
                      onMouseEnter={()=>setDropDown(true)}
                      onMouseLeave={()=>setDropDown(false)}
                       >
                       <Link href={path} className='header-title'>{title}</Link>
                       {dropDown && <div className={scrolled?"scrolled-destination":""}><DestinationDropDown/></div>}
                      </li>
                    )
                }

                return(
                  <li key={id} className={cName}>
                    <Link href={path} className='list-itm'>{title}</Link>
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
                {open? <CgClose className='icon'onClick={()=>setOpen(false)}/> : <GiHamburgerMenu className='icon' onClick={()=>setOpen(true)}/>}
              </div>
              <div className={scrolled?"logos img-logo":"logos"}>
                  <Image src={CompanyLogo} alt="company-logo"/>
                </div> 
          </div>
        </div>

      </div>  
    </div>


    {open
       && 

              (
           <div className='tablet-nav'>
            <div className="tablet-nav-elements">
                <div className="tablet-nav-small-group-trips">
                    <h3>small group trips</h3>
                </div>

               <div className="tablet-nav-destination">
                      <div className="icons">
                        {toggleDestination ? <TfiPlus  className='icon'onClick={()=>setToggleDestination(false)}/> : <TfiMinus  className='icon'onClick={()=>setToggleDestination(true)}/>}
                        <h3>destination</h3>
                      </div>
                      {toggleDestination && (
                       <ul>
                        <Link href="#" className='header-title'>volta region</Link>
                        <Link href="#" className='header-title'>eastern region</Link>
                        <Link href="#" className='header-title'>Kente movement</Link>
                        <Link href="#" className='header-title'>2024+ 2025 calender</Link>
                      </ul>

                      )}         
               </div>

                <div className="tablet-nav-custom-trips">
                    <h3>Custom trips</h3>
                </div>

                <div className="tablet-nav-shop">
                      <div className="icons">
                        {toggleshop ? <TfiPlus className='icon' onClick={()=>setToggleShop(false)}/> : <TfiMinus className='icon'onClick={()=>setToggleShop(true)} />}
                        <h3>shop</h3>
                      </div>
                      {toggleshop && (
                       <ul>
                        <Link href="#" className='header-title'>Lorem, ipsum.</Link>
                        <Link href="#" className='header-title'>Lorem, ipsum.</Link>
                      </ul>
              
                      )}
               </div>

              <div className="tablet-nav-about">
                      <div className="icons">
                        {toggleAbout ? <TfiPlus className='icon' onClick={()=>setToggleAbout(false)}/> : <TfiMinus className='icon' onClick={()=>setToggleAbout(true)}/>}
                        <h3>About</h3>
                      </div>
                      {toggleAbout && (
                       <ul>
                        <Link href="About/OurStory" className='header-title'>our story</Link>
                        <Link href="About/TalkToUs" className='header-title'>faqs</Link>
                        <Link href="About/Team" className='header-title'>teams</Link>
                      </ul>
                      )}

              
               </div>


            </div> 
        </div>
       )
    }
     </div>
  )
}

export default Navbar
