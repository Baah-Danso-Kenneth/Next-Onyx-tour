import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CompanyLogo from '../../public/assets/images/onyxx-logo.png'
import Link from 'next/link'
import { LeftSection, RighSection } from './NavBarItems'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'
import {TfiPlus} from 'react-icons/tfi'
import { TfiMinus } from 'react-icons/tfi'




function Navbar() {

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

export default Navbar









export function StraightNavbar() {

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

