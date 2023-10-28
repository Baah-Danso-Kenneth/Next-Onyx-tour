import React, {ReactNode} from 'react'
import Navbar from './Navbar'
import NewLetter from './NewLetter'
import Footer from './Footer'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='app'>
        <div className="nav-bar">
         <Navbar/> 
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

export default Layout
