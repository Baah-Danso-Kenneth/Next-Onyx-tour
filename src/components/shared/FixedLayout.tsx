import React, { ReactNode } from 'react'
import Footer from '../Footer'
import NewsLetter from '../NewsLetter'
import { FullNavbar } from '../Navbar'

function FixedLayout({children}:{children:ReactNode}) {
    return (
        <div className='app'>
            <div className="full-nav-bar"><FullNavbar/></div>
            <div className="content">{children}</div>
            <div className="news-letters"><NewsLetter/></div>
            <div className="footer"><Footer/></div>
        </div>
      )
    }


export default FixedLayout
