import React from 'react'
import Button from './Button'

function NewsLetter() {
  return (
    <div className='news-letter-container'>
        <div className="banner-text">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, rerum.</p>
        </div>
      <div className="news-letter-container-names">
        <input/>
        <input/>
      </div>
      <div className="news-letter-container-email">
        <input/>
      </div>
      <div className="new-letter-btn">
        <Button text='join' link='#'/>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default NewsLetter
