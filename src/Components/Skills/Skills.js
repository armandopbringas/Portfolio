import React from 'react'
import Bar from '../Bar/Bar'
import { SkillsContainer } from './SkillsStyles' 

const Skills = ({ className, title = 'Skills', skills = [] }) => {
    return (
        <SkillsContainer className={className}>
            <h1 className='skillsTitle'>{title}</h1>
            {skills.map(skill => (
                <Bar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level}
                />
            ))}
      </SkillsContainer>
    )
}

export default Skills
