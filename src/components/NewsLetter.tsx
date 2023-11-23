import React from 'react'

function NewsLetter() {
  return (
    <div className='news-letter-container'>
      <div className="news-letter-container-elements">
         <div className="text-content">
            <div className="text-content-title">
              <h1>Join the onyx travelling community</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni </p>
         </div>

        <div className="form-content">
          <form action="#">
            <div className="names">
              <input type="text" placeholder='first-name' />
              <input type="text" placeholder='last-name' />
            </div>

            <div className="email">
              <input type="email" placeholder='email' />
            </div>

            <div className="news-letter-btn">
              <button>Join now</button>
            </div>

          </form>
        </div>

        <div className="p-tag">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, illo.</p>
        </div>

      </div>
    </div>
  )
}

export default NewsLetter
