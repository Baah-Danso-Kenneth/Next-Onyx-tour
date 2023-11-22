import React from 'react'
import Gallery1 from '../../../public/assets/images/g-1.jpg'
import Gallery2 from '../../../public/assets/images/g-2.jpg'
import Gallery3 from '../../../public/assets/images/g-3.jpg'
import Gallery4 from '../../../public/assets/images/g-4.jpg'
import Gallery5 from '../../../public/assets/images/g-5.jpg'
import Gallery6 from '../../../public/assets/images/g-6.jpg'
import Gallery7 from '../../../public/assets/images/g-7.jpg'
import Gallery8 from '../../../public/assets/images/g-8.jpg'
import Gallery9 from '../../../public/assets/images/g-9.jpg'
import GridContent from '@/components/Cards/GridContent'

function GridContainer() {
 const gallery=[
    {id:1,img:Gallery1},
     {id:2,img:Gallery2},
      {id:3,img:Gallery3},
       {id:4,img:Gallery4},
        {id:5,img:Gallery5},
         {id:6,img:Gallery6},
          {id:7,img:Gallery7},
           {id:8,img:Gallery8},
            {id:9,img:Gallery9},
 ]
  return (
    <div className='grid-container'>
      {gallery.map((item, index)=>(
        <GridContent key={index} {...item}/>
      ))}
    </div>
  )
}

export default GridContainer
