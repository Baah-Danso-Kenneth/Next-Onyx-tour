/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

function HaveQuestion() {
  return (
    <div id="faqs" className='question-container'>
        <div className="question-container-element">
           <div className="question-text">
            <h1>Have question?</h1>
           </div>
           <div className="question-answers">
            <p>(we've got answers)</p>
           </div>
           <div className="question-button">
            <button>
                <Link href="#" className='link'>
                   Visit our help desk
                </Link>
             
                </button>
           </div>
        </div> 
    </div>
  )
}

export default HaveQuestion
