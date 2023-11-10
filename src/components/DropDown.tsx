import React,{useState,useEffect} from 'react'
import { AboutItem, DestinationItems, ShopItems } from './NavItems'
import Link from 'next/link'
import Image from 'next/image'
import {TfiPlus} from 'react-icons/tfi'
import { TfiMinus } from 'react-icons/tfi'


export function DestinationDropDown() {
    const [dropDown, setDropDown]=useState(false)

  return (
     <div className='drop-content'>
      <ul className={dropDown ?"destination-items clicked":`destination-items`} onClick={()=>setDropDown(!dropDown)}>
        {DestinationItems.map(({id,path,title,cName})=>{
            return(
                <li key={id}>
                    <Link href={path} className={cName} onClick={()=>setDropDown(false)}>{title}</Link>
                </li>
            )
        })}
      </ul>
      </div>

  )
}



export function AboutDropDown(){
    const [dropAbout, setAbout]=useState(false)
    return(
        <ul className="about-items" onClick={()=>setAbout(!dropAbout)}>
            {AboutItem.map(({id, cName,path,title})=>{
                return(
                    <li key={id}>
                        <Link href={path} className={cName} onClick={()=>setAbout(false)}>{title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export function ShopDropDown(){
    return(
      <ul className='shop-items'>
        {ShopItems.map(({id, cName,path,title})=>{
            return(
                <li key={id}>
                    <Link href={path} className={cName}>{title}</Link>
                </li>
            )
        })}
      </ul>
    )
}

export const TabletNav=()=>{
    const [toggleDestination,setToggleDestination]=useState(false)
    const [toggleshop,setToggleShop]=useState(false)
    const [toggleAbout,setToggleAbout]=useState(false)

    return(
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


