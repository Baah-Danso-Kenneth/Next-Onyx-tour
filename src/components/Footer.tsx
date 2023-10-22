import React from 'react'
import Image from 'next/image'
import AnimeBrand from '../../public/assets/images/anime.png';
import KenteBrand from '../../public/assets/images/kente.png'
import TiyacBrand from '../../public/assets/images/tiyac.png';
import TouchBrand from '../../public/assets/images/touch.png';
import Link from 'next/link';



function Footer() {
  return (
    <div className='footer-container'>
        <div className="sponsors">
           <Image src={AnimeBrand} width={150} height={150} alt='brand1'/>
           <Image src={KenteBrand} width={150} height={150} alt='brand2' />
           <Image src={TiyacBrand} width={150} height={150} alt='brand3'/> 
           <Image src={TouchBrand} width={150} height={150} alt='brand3'/> 
        </div>

        <div className="footer-comment">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, atque tempore eum dignissimos maiores ipsam nostrum quo, ut cumque laudantium maxime dolore. Architecto eveniet tempora explicabo quia, reprehenderit ducimus pariatur!</p>
        </div>

        <div className="contact-us">
          <h3>Contact us</h3>
           <Link href="#" className='footer-link' >onyx-ghana@tour.com</Link>
           <p>Monday-Friday: 10am - 6pm WST</p>
        </div>

        <div className="footer-tag">
          <p> &copy; 2024 Onyx Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, possimus!</p>
        </div>
    </div>
  )
}

export default Footer
