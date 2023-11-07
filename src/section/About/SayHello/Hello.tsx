import React from 'react'

function Hello() {
  return (
      <div className='talk-to-us-container'>
         <div className="talk-to-us-container-element">
            <div className="statement">
                <h1>Talk to us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, modi?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati temporibus voluptate soluta ipsam necessitatibus culpa iure reiciendis natus ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quo.</p>
            </div>

            <form action="#">
                <div className="name-content">
                    <h3>Name (required)</h3>
                    <div className="first-name-last-name">
                        <div className="first-name">
                             <label htmlFor="first-name">FirstName</label>
                             <input type="text" />
                        </div>

                             <div className="last-name">
                             <label htmlFor="last-name">LastName</label>
                             <input type="text" />
                        </div>
                       
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email (required)</label>
                        <input type="text" />
                    </div>

                    <div className="subject">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" />
                    </div>

                    <div className="message">
                        <label htmlFor="message">Message (required)</label>
                       <textarea id='message' name='message'/>
                    </div>

                   <div className="checkbox">
                    <h1>do you want us to give you a call?</h1>
                    <label htmlFor="yes">
                        <input type="checkbox" /> Yes please
                    </label>


                     <label htmlFor="yes">
                        <input type="checkbox" /> No please i prefer communication via email only
                    </label>

                   </div>

                    <div className="phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" />
                    </div>

                    <div className="time-to-reach-out">
                        <label htmlFor="reach">best time to reach you out</label>
                        <input type="text" />
                    </div>

                    <div className="submit">
                        <button>send</button>
                    </div>

                </div>
            </form>
         </div>
      </div>
  )
}

export default Hello
