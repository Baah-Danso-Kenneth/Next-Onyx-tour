import Image from 'next/image'
import React from 'react'
import CompanyLogo from '../../public/assets/images/yensa-nua.png';

function Loading() {
  return (
    <div className='loader-container'>
        <Image src={CompanyLogo} alt='company-logo'/>
      
    </div>
  )
}

export default Loading