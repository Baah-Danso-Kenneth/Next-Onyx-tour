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

            <form>
                <div>
                    <div className="name-content">
                    <h3>Name <span>(required)</span></h3>
                    <div className="first-name-last-name">
                        <div className="first-name">
                             <label htmlFor="first-name">FirstName</label><br/>
                             <input type="text" />
                        </div>

                             <div className="last-name">
                             <label htmlFor="last-name">LastName</label><br/>
                             <input type="text" />
                        </div>
                       
                    </div>
                </div>
                    <div className="email">
                        <label htmlFor="email">Email <span>(required)</span></label><br/>
                        <input type="text" />
                    </div>

                    <div className="subject">
                        <label htmlFor="subject">Subject</label><br/>
                        <input type="text" />
                    </div>

                    <div className="message">
                        <label htmlFor="message">Message (required)</label><br/>
                       <textarea id='message' name='message'/>
                    </div>

                   <div className="checkbox">
                    <h3>do you want us to give you a call? <span>(required)</span></h3>

                    <div className="checkbox-item">
                       <label htmlFor="yes" className="checkbox-label">
                          <input type="checkbox" id="yes" className="box-checks" /> Yes please
                        </label>
                     <label htmlFor="no" className="checkbox-label">
                      <input type="checkbox" id="no" /> No please, I prefer communication via email only
                     </label>
                  </div>


                   </div>

                    <div className="phone">
                        <label htmlFor="phone">Phone</label><br/>
                        <input type="text" />
                    </div>

                    <div className="time-to-reach-out">
                        <label htmlFor="reach">best time to reach you out</label><br/>
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
