// import React, { useState } from 'react'

// function WhatWeDo() {

//   const [titleMsg1,setTitleMsg1]=useState<string>("Connect")
//   const [baseMsg1,setBaseMsg1]=useState<string>("Lorem ipsum, dolor sit amet consectetur adipisicing ")

//   const [titleMsg2,setTitleMsg2]=useState<string>("Experience")
//   const [baseMsg2,setBaseMsg2]=useState<string>("Lorem ipsum, dolor sit amet consectetur adipisicing ")

//   const [titleMsg3,setTitleMsg3]=useState<string>("Celebrate")
//   const [baseMsg3,setBaseMsg3]=useState<string>("Lorem ipsum, dolor sit amet consectetur adipisicing ")




//   return (
//     <div className='what-we-do-container'>
//         <div className="what-we-do-container-elements">
//             <div className="title">
//                 <h1>Lorem ipsum, dolor sit amet consectetur adipisicing </h1>
//             </div>
//             <div className="experiences">
//             <div className="first-experience">
//                 <h1>{titleMsg1}</h1>
//                 <p>{baseMsg1}</p>
//             </div>
//             <div className="second-experience">
//                 <h1>{titleMsg2}</h1>
//                 <p>{baseMsg2}</p>
//             </div>

//             <div className="third-experience">
//                 <h1>{titleMsg3}</h1>
//              <p>{baseMsg3}</p>
//             </div>
//         </div>
//         </div>
      
//     </div>
//   )
// }

// export default WhatWeDo


import React, { useRef, useState } from 'react';

function WhatWeDo() {
  const [sections, setSections] = useState([
    { title: "Connect", baseMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates" },
    { title: "Experience", baseMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates" },
    { title: "Celebrate", baseMsg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates" },
  ]);

  const handleTextChange = (index: number, newTitle: string) => {
    const newSections = [...sections];
    newSections[index].title = newTitle;
    setSections(newSections);
  };

  const handleChangeP = (index: number, newBaseMsg: string) => {
    const newSections = [...sections];
    newSections[index].baseMsg = newBaseMsg;
    setSections(newSections);
  };

  return (
    <div className="what-we-do-container">
      <div className="what-we-do-container-elements">
        <div className="title">
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing </h1>
        </div>
        <div className="experiences">
          {sections.map((section, index) => (
            <div className="first-experience" key={index}>
              <h1
                onBlur={(event) => handleTextChange(index, event.target.innerText)}
                contentEditable
                suppressContentEditableWarning
              >
                {section.title}
              </h1>
              <p
                onBlur={(event) => handleChangeP(index, event.target.innerText)}
                contentEditable
                suppressContentEditableWarning
              >
                {section.baseMsg}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
