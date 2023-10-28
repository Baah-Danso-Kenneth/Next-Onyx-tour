import React, {ReactNode} from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='app'>
        <div className="nav-bar">
          <h1>Navbar</h1>
        </div>

        <div className="children">
          {children}
        </div>

        <div className="news-letters">
          <h2>Newsletters</h2>
        </div>

        <div className="footer">
          <h3>Footer</h3>
        </div>
      
    </div>
  )
}

export default Layout
