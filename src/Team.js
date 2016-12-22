import React from 'react'
import './css/Team.css'

// import TeamMember from './TeamMember.js'

const members = [
  {
    name: "Alexandre Leroy",
    skills: ["Sound Engineer", "Studio Manager", "FOH / In ear Mixer"],
    contact: {phone: "475 794 638", email: "alexandre"}
  },{
    name: "Arnaud Chamey",
    skills: ["Sound Engineer", "Production"],
    contact: {phone: "488 467 129", email: "arnaud"}
  },{
    name: "Olivier Delescaille",
    skills: ["Sound engineer", "Live & Studio"],
    contact: {phone: "479 602 064", email: "olivier"}
  },{
    name: "Nicolas Vandeweyer",
    skills: ["Sound engineer", "Live & Studio"],
    contact: {phone: "477 926 036", email: "nicolas"}
  },{
    name: "Matthieu Charray",
    skills: ["Sound Engineer"],
    contact: {phone: "486 232 352", email: "matthieu"}
  },{
    name: "Gaethan Dehoux",
    skills: ["Sound Engineer"],
    contact: {phone: "496 442 031", email: "gaethan"}
  }
]

const Team = () => {

  const TeamMembers = members.map((member, i) => {

    let contactSection = null
    if (window) {
      contactSection = (
        <div className="TeamMember-contacts">
          <div className="TeamMember-contact">{"+32 " + member.contact.phone}</div>
          <div className="TeamMember-contact TeamMember-contact--bar"> | </div>
          <a href={"mai" + "lto:" + member.contact.email + "@studi" + "osix.eu"} target="_top" className="TeamMember-contact TeamMember-contact--email">{member.contact.email + "@studi" + "osix.eu"}</a>
        </div>
      )
    }

    return (
      <div key={i} className="TeamMember">
        <div className="TeamMember-box">
          <div className="TeamMember-name">{member.name}</div>
          <div className="TeamMember-skills">
            {member.skills.map((skill, i) => <div key={i} className="TeamMember-skill">{skill}</div>)}
          </div>
          {contactSection}
        </div>
      </div>
    )
  }) // TeamMember

  return (
    <div className="Team uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-2 uk-grid-width-xlarge-1-3">
      {TeamMembers}
    </div>
  )
}

export default Team


// {
//   members.map((member, i) => {
//     return <TeamMember key={i} memberData={member} />
//   })
// }
