import React from 'react'
import Person1 from '../../../../public/assets/images/person1.jpg'
import Person2 from '../../../../public/assets/images/person2.jpg'
import Person3 from '../../../../public/assets/images/person4.jpg'
import Person4 from '../../../../public/assets/images/person5.jpeg'
import Person5 from '../../../../public/assets/images/person3.jpg'
import Person6 from '../../../../public/assets/images/person1.jpg'
import TeamBio from '@/components/Card/TeamBio'


function Places() {

  return (
    <div className='eastern-container'>

    </div>
  )
}

export default Places


export function Eastern() {
 const TeamMembers=[
  {id:1,name:"Bernard Ntim", role:"Textile Designer",src:Person1},
  {id:2,name:"Bernard Ntim", role:"Artist",src:Person2},
  {id:3,name:"Bernard Ntim", role:"Chef",src:Person3},
  {id:4,name:"Bernard Ntim", role:"Jewellery Designer",src:Person4},
  {id:5,name:"Bernard Ntim", role:"Hotelier",src:Person5},
  {id:6,name:"Bernard Ntim", role:"Restauranteur",src:Person6},
 ]
  return (
    <div className='eastern-container'>
        <h1>Eastern Region</h1>
        <div className="eastern-container-element">
            {TeamMembers.map(({id,name,role,src})=>{
                return(
                    <TeamBio key={id} name={name} role={role} src={src.src}/>
                )
            })}

        </div>
        <div className="btn-travel">
            <button>Travel to Eastern Region</button>
        </div>
    </div>
  )
}


export function Volta() {
     const TeamMembers=[
  {id:1,name:"Bernard Ntim", role:"Textile Designer",src:Person1},
  {id:2,name:"Bernard Ntim", role:"Artist",src:Person2},
  {id:3,name:"Bernard Ntim", role:"Chef",src:Person3},

 ]
  return (
    <div className='volta-container'>
        <h1>Volta Region</h1>
        <div className="volta-container-element">
            {TeamMembers.map(({id,name,role,src})=>{
                return(
                    <TeamBio key={id} name={name} role={role} src={src.src}/>
                )
            })}

        </div>
        <div className="btn-travel">
            <button>Travel to Volta Region</button>
        </div>
    </div>
  )
}


export function GreaterAccra() {
 const TeamMembers=[
  {id:1,name:"Bernard Ntim", role:"Textile Designer",src:Person1},
  {id:2,name:"Bernard Ntim", role:"Artist",src:Person2},
  {id:3,name:"Bernard Ntim", role:"Chef",src:Person3},
  {id:4,name:"Bernard Ntim", role:"Jewellery Designer",src:Person4},
  {id:5,name:"Bernard Ntim", role:"Hotelier",src:Person5},
 
 ]
  return (
    <div className='greater-container'>
        <h1>Greater Region</h1>
        <div className="greater-container-element">
            {TeamMembers.map(({id,name,role,src})=>{
                return(
                    <TeamBio key={id} name={name} role={role} src={src.src}/>
                )
            })}

        </div>
        <div className="btn-travel">
            <button>Travel to Greater Region</button>
        </div>
    </div>
  )
}
