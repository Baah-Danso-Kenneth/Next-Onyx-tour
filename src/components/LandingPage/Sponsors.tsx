import React from 'react';
import KenteImg from '../../../public/assets/images/kente.png';
import AnimeImg from '../../../public/assets/images/anime.png';
import TiyacImg from '../../../public/assets/images/tiyac.png';
import TouchImg from '../../../public/assets/images/touch.png';
import Image from 'next/image';


function Sponsors() {
  return (
    <div className='sponsors-container'>
        <div className="sponsors-container-elements">
            <Image src={KenteImg} alt="kente-img"/>
            <Image src={AnimeImg} alt="anime-img"/>
            <Image src={TiyacImg} alt="tiyac-img"/>
            <Image src={TouchImg} alt="touch-img"/>
        </div>
      
    </div>
  )
}

export default Sponsors
