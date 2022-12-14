import React from 'react'
import { skills } from './Skills'

const SkillsSection = ({skillName}) => {
  return (
    // <div className='about-txt col-3 py-2'>
    //     <p className='skill-item'>{skillName}</p>
    // </div>
    <ul className='skills-sect'>
      { skills.map((item)=> 
        <li key={item.id}>
          {item.skillName}
        </li>
      )}
    </ul>
  )
}

export default SkillsSection