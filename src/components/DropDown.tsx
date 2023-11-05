import React,{useState} from 'react'
import { AboutItem, DestinationItems, ShopItems } from './NavItems'
import Link from 'next/link'


export function DestinationDropDown() {
    const [dropDown, setDropDown]=useState(false)

  return (
      <ul className={dropDown ?"destination-items clicked":"destination-items"} onClick={()=>setDropDown(!dropDown)}>
        {DestinationItems.map(({id,path,title,cName})=>{
            return(
                <li key={id}>
                    <Link href={path} className={cName} onClick={()=>setDropDown(false)}>{title}</Link>
                </li>
            )
        })}
      </ul>

  )
}



export function AboutDropDown(){
    const [dropAbout, setAbout]=useState(false)
    return(
        <ul className='about-items' onClick={()=>setAbout(!dropAbout)}>
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


