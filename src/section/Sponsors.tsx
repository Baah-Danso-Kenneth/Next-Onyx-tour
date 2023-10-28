import React from 'react'
import TiyacImage from '../../public/assets/images/tiyac.png';
import TouchImage from '../../public/assets/images/touch.png';
import Image from 'next/image';
import AnimeImage from '../../public/assets/images/anime.png';
import KenteImage from '../../public/assets/images/kente.png'


function Sponsors() {
  return (
    <div className='sponsors-container'>
        <div className="sponsors-container-elements">
         <div className="flex-images">
          <Image src={TiyacImage} alt='tiyac-img'/>
           <Image src={TouchImage} alt='touch-img'/>
            <Image src={AnimeImage} alt='anime-img'/>
             <Image src={KenteImage} alt='kente'/>
             </div>
        </div>
    </div>
  )
}

export default Sponsors
