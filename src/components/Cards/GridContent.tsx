import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface GalleryProps{
    img:StaticImageData;
    id?:number;
}

function GridContent({img,id}:GalleryProps) {
  return (
    <div className='img-container'>
      <Image src={img} alt="id"/>
    </div>
  )
}

export default GridContent
