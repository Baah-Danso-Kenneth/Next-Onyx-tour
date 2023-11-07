import TeamBio from '@/components/Card/TeamBio'
import React from 'react'

function MeetTeam() {

 const TeamMembers=[
  {id:1,name:"Bernard Ntim", role:"founder",src:""},
  {id:2,name:"Bernard Ntim", role:"founder",src:""},
  {id:3,name:"Bernard Ntim", role:"founder",src:""},
  {id:4,name:"Bernard Ntim", role:"founder",src:""},
  {id:5,name:"Bernard Ntim", role:"founder",src:""},
  {id:6,name:"Bernard Ntim", role:"founder",src:""},
 ]

  return (
    <div className='meet-team-container'>
        <div className="meet-team-container-element">
          <h1>Meet the Onyx Team</h1>
          {TeamMembers.map(({id,name,role,src})=>{
            return(
                <TeamBio  key={id} name={name} role={role} src={src}/>
            )
          })}
        </div>
    </div>
  )
}

export default MeetTeam
