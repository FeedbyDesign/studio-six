import React from 'react'
// import './css/team.css'
// import Pic from './img/photo-dragonfly.jpg'

import TeamMember from './TeamMember.js'

const members = [
  {
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "+32 123 456 789", email: "someemail@studiosix.eu"}
  },{
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "+32 123 456 789", email: "someemail@studiosix.eu"}
  },{
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "+32 123 456 789", email: "someemail@studiosix.eu"}
  },{
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "+32 123 456 789", email: "someemail@studiosix.eu"}
  },{
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "+32 123 456 789", email: "someemail@studiosix.eu"}
  },{
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "+32 123 456 789", email: "someemail@studiosix.eu"}
  }
]

const Team = () => {

  return (
    <div className="uk-grid uk-grid-width-1-1 uk-grid-width-small-1-2 uk-grid-width-medium-1-3">
      {
        members.map((member, i) => {
          return <TeamMember key={i} memberData={member} />
        })
      }
    </div>
  )
}

export default Team
