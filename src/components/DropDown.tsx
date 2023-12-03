import React,{useState,useEffect} from 'react'
import { AboutItem, DestinationItems, PlaceDestinationItems} from './NavBarItems'
import Link from 'next/link'




export function DestinationDropDown() {
    const [dropDown, setDropDown]=useState(false)

  return (
    <>
      <ul className='destination-card'>
        {DestinationItems.map(({id,path,title,cName})=>{
            return(
                <li key={id}>
                    <Link href={path} className={cName} onClick={()=>setDropDown(false)}>{title}</Link>
                </li>
            )
        })}
      </ul>
      </>
  )
}




export function PlaneDestinationDropDown() {
    const [dropDown, setDropDown]=useState(false)

  return (
    <>
      <ul className='plane-destination' onClick={()=>setDropDown(!dropDown)}>
        {PlaceDestinationItems.map(({id,path,title,cName})=>{
            return(
                <li key={id}>
                    <Link href={path} className={cName} onClick={()=>setDropDown(false)}>{title}</Link>
                </li>
            )
        })}
      </ul>
      </>
  )
}




export function AboutDropDown(){
    const [dropAbout, setAbout]=useState(false)

    return(
        <>
        <ul className='about'>
            {AboutItem.map(({id,path,title,cName})=>{
                return(
                    <li key={id}>
                        <Link href={path} className={cName} onClick={()=>setAbout(false)}>{title}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}



export function PlaneAboutDropDown(){
    const [dropAbout, setAbout]=useState(false)

    return(
        <>
        <ul className='plane-about'>
            {AboutItem.map(({id,path,title,cName})=>{
                return(
                    <li key={id}>
                        <Link href={path} className={cName} onClick={()=>setAbout(false)}>{title}</Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

