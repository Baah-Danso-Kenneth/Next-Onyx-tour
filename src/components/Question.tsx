import React from 'react'

interface QuestionProps{
    title:string;
    answers:string;
    btn_text:string
}

function Question({title,answers,btn_text}:QuestionProps) {
  return (
    <div className='question-content-option' id='faqs'>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='answer'>
        <p>{answers}</p>
      </div>

      <div className='questions-btn'>
        <button>{btn_text}</button>
      </div>
    </div>
  )
}

export default Question
