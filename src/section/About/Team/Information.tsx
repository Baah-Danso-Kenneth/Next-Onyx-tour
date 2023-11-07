import Link from 'next/link'
import React from 'react'
import {TbMinusVertical} from 'react-icons/tb'

function Information() {
  return (
    <div className='information-content'>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="information-content-element">
            <div className="first-part">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus ad quos ab sint labore pariatur aliquid, sapiente incidunt quaerat! Iure veniam officiis distinctio, eos ullam rerum eum nihil deserunt ducimus earum reiciendis, fugiat explicabo unde illum laborum quam autem ab esse ex nemo, facilis aliquam voluptate? 
                    Unde temporibus, illo dicta modi eligendi nihil eos asperiores. Cum corrupti expedita ratione?</p>
            </div>

            <div className="second-part">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem incidunt repellat porro reiciendis
                     sapiente voluptate numquam maxime optio voluptatibus!</p>
            </div>
                   <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque?</span>
            <div className="third-part">
                 <ul>
                    <Link href="#" className='links'>Volta Region</Link>
                     <TbMinusVertical className='line'/>
                     <Link href="#" className='links'>Eastern Region</Link>
                     <TbMinusVertical className='line'/>
                     <Link href="#" className='links'>Central Region</Link>
                     <TbMinusVertical className='line'/>
                     <Link href="#" className='links'>Greater Accra</Link>
                 </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Information
