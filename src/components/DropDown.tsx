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
    const [scrolled, setScrolled]=useState(false)
    const [scrollPosition, setScrolledPosition]=useState(0)

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

    return(
        <div className={scrolled ?'stretch':'tablet-nav'}>
            <div className="tablet-nav-elements">
                <div className="tablet-nav-small-group-trips">
                    <h3>small group trips</h3>
                </div>

               <div className="tablet-nav-destination">
                      <div className="icons">
                        {toggleDestination ? <TfiPlus onClick={()=>setToggleDestination(false)}/> : <TfiMinus onClick={()=>setToggleDestination(true)}/>}
                        <h3>destination</h3>
                      </div>
                      {toggleDestination && (
                       <ul>
                        <li>volta region</li>
                        <li>eastern region</li>
                        <li>Kente movement</li>
                        <li>2024+ 2025 calender</li>
                      </ul>

                      )}         
               </div>

                <div className="tablet-nav-custom-trips">
                    <h3>Custom trips</h3>
                </div>

                <div className="tablet-nav-shop">
                      <div className="icons">
                        {toggleshop ? <TfiPlus onClick={()=>setToggleShop(false)}/> : <TfiMinus onClick={()=>setToggleShop(true)}/>}
                        <h3>shop</h3>
                      </div>
                      {toggleshop && (
                       <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                      </ul>
              
                      )}
               </div>

              <div className="tablet-nav-about">
                      <div className="icons">
                        {toggleAbout ? <TfiPlus onClick={()=>setToggleAbout(false)}/> : <TfiMinus onClick={()=>setToggleAbout(true)}/>}
                        <h3>About</h3>
                      </div>
                      {toggleAbout && (
                       <ul>
                        <li>our story</li>
                        <li>faqs</li>
                        <li>teams</li>
                      </ul>
                      )}              
               </div>
            </div> 
        </div>
    )
}


