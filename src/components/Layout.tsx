import React, {useState, useEffect,ReactNode} from 'react'
import Navbar from './Navbar'
import NewLetter from './NewLetter'
import Footer from './Footer'


function Layout({children}:{children:ReactNode}) {
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
  return (
    <div className='app'>
        <div className={scrolled ?"nav-bar shrink-head":"nav-bar"}>
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
