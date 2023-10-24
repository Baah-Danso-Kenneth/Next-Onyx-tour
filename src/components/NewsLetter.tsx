import React from 'react'
import Button from './Button'

function NewsLetter() {
  return (
    <div className='news-letter-container'>
        <div className="banner-text">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p className='small-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum.</p>
        </div>

        <div className="flex-input">
           <div className="flex-input-names">
              <input type='text' placeholder='First Name'/>
               <input type='text' placeholder='Last Name'/>
          </div>

           <div className="flex-input-email">
               <input type='text' placeholder='Email Address'/>
             </div>
      <div className="flex-input-btn">
            <button type='submit'>join now</button>
        </div>
          </div>
      <p className='small-text-2'>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default NewsLetter
