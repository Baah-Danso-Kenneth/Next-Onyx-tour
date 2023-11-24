import React from 'react'
import KenteImage from '../../public/assets/images/kente.png'
import AnimeImage from '../../public/assets/images/anime.png'
import TouchImage from '../../public/assets/images/touch.png'
import TiyacImage from '../../public/assets/images/tiyac.png'

import Image from 'next/image'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-container-elements">

        <div className="logo">
          <Image src={KenteImage} alt="img-1"/>
          <Image src={AnimeImage} alt="img-1"/>
          <Image src={TouchImage} alt="img-1"/>
          <Image src={TiyacImage} alt="img-1"/>
        </div>

        <div className="statement">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus voluptate nisi doloremque eveniet</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat.</p>
        </div>

        <div className="contacts">
            <h3>contact us</h3>
            <p>hello-onyx@gmail.com</p>
            <h5>Monday-Friday:10am - 6pm</h5>
        </div>

        <div className="copyright">
         <p> &copy; Onyx Team NYC, all rights reserved. &reg; is a registered trademark of Onyx Travels.Privacy Policy</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
