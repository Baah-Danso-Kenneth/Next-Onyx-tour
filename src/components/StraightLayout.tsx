import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import NewLetter from './NewLetter'
import Footer from './Footer'
import PlainNav from './PlainNav'

function StraightLayout({children}:{children:ReactNode}){
  return (
    <div className='app'>
        <div className="edited-bar">
         <PlainNav/> 
        </div>

        <div className="children">
          {children}
        </div>

        <div className="news-letters">
          <NewLetter/>
        </div>

        <div className="footer">
          <Footer/>
        </div>
      
    </div>
  )
}


export default StraightLayout
