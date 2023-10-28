import React from 'react'
import TiyacImage from '../../public/assets/images/tiyac.png';
import TouchImage from '../../public/assets/images/touch.png';
import Image from 'next/image';
import AnimeImage from '../../public/assets/images/anime.png';
import KenteImage from '../../public/assets/images/kente.png'


function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-container-elements">

        <div className="footer-container-elements-1">
           <Image src={TiyacImage} alt='tiyac-img'/>
           <Image src={TouchImage} alt='touch-img'/>
            <Image src={AnimeImage} alt='anime-img'/>
             <Image src={KenteImage} alt='kente'/>
            
        </div>

        <div className="footer-container-elements-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
             perspiciatis laboriosam ad ab temporibus facere veritatis dolore modi inventore dignissimos!</p>
        </div>

        <div className="footer-container-elements-3">
          <h3>Contacts</h3>
          <p>hello@world.gmail.com</p>
          <p>Monday-Friday: 10am -30pm EST</p>
        </div>

        <div className="footer-container-elements-4">
          <p>&copy; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, rerum.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
