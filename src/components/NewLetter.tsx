import React from 'react'

function NewLetter() {
  return (
    <div className='news-letter-form-container'>
      <div className="news-letter-form-container-elements">
         <div className="title">
           <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cum.</p>
         </div>

          <form action="#">
            <div className="names">
              <input placeholder='first-Name'/>
              <input placeholder='second-Name'/>
            </div>

            <div className="email">
              <input placeholder='email Address'/>
            </div>

            <div className="button">
              <button>join now</button>
            </div>
          </form>

          <div className="sub-statement">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
    </div>
  )
}

export default NewLetter
