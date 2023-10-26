import React from 'react'
import Image from 'next/image'
import LoaderImage from '../../public/assets/images/campalla.png';

function Loader() {
  return (
    <div className='loader-container'>
         <Image src={LoaderImage}  alt='loader-img' />
    </div>
  )
}

export default Loader
