import TeamBio from '@/components/Card/TeamBio'
import React from 'react'
import Person1 from '../../../../public/assets/images/person1.jpg'
import Person2 from '../../../../public/assets/images/person2.jpg'
import Person3 from '../../../../public/assets/images/person4.jpg'
import Person4 from '../../../../public/assets/images/person5.jpeg'
import Person5 from '../../../../public/assets/images/person3.jpg'
import Person6 from '../../../../public/assets/images/person1.jpg'


function MeetTeam() {
 const TeamMembers=[
  {id:1,name:"Bernard Ntim", role:"founder",src:Person1},
  {id:2,name:"Bernard Ntim", role:"founder",src:Person2},
  {id:3,name:"Bernard Ntim", role:"founder",src:Person3},
  {id:4,name:"Bernard Ntim", role:"founder",src:Person4},
  {id:5,name:"Bernard Ntim", role:"founder",src:Person5},
  {id:6,name:"Bernard Ntim", role:"founder",src:Person1},
 ]

  return (
    <div className='meet-team-container'>
                 <h1>Meet the Onyx Team</h1>
          <div className="meet-team-container-element">
          {TeamMembers.map(({id,name,role,src})=>{
            return(
                <TeamBio key={id} name={name} role={role} src={src.src}/>
            )
          })}
        </div>
    </div>
  )
}

export default MeetTeam
