import React from 'react'
import { Link } from 'react-router'
import './css/Team.css'

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

let email = null
if (window) {
  email = "inf"+"o@stu"+"diosix.eu"
  email = <p className="Team-contact-item">Email the manager at <Link href={"mai"+"lto:"+email}>{email}</Link>.</p>
}

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
    <div className="Team-flexWrapper">
      <div className="Team">
        {TeamMembers}
      </div>
      <div className="Team-contact">
        <p className="Team-contact-item">
          Studio Six is located in&nbsp;
          <Link
            href="https://www.google.be/maps/place/1070+Anderlecht/@50.8374016,4.3034447,13.75z/data=!4m5!3m4!1s0x47c3a4d1b60305a9:0xeba77790dbb9a06f!8m2!3d50.8365808!4d4.308187"
            target="_blank"
            >Anderlecht - Brussels</Link>.
        </p>
        {email}
        <p className="Team-contact-item">
          And don't forget to <Link href="https://www.facebook.com/Studio-Six-223846264367486/" target="_blank" className="">follow us on facebook</Link>.
        </p>
      </div>
      <p className="feed">Website built with <i className="uk-icon-heart-o"></i> by <Link href="http://feedbydesign.com" target="_blank" className="">Feed by Design</Link></p>
    </div>
  )
}

export default Team


// {
//   members.map((member, i) => {
//     return <TeamMember key={i} memberData={member} />
//   })
// }
