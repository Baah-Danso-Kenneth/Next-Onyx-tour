import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import NewsLetter from './NewsLetter'

function Layout({children}:{children: ReactNode}) {
  return (
    <div className='app'>
       <div className="nav-bar">
        <Navbar/>
       </div>

        <div className="content">
        {children}
       </div> 

       <div className='newsletter'>
        <NewsLetter/>
       </div>  

       <div className='footer'>
        <Footer/>
       </div> 
    </div>
  )
}

export default Layout