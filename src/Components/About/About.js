import React from 'react'
import Description from '../Description/Description'
import Skills from '../Skills/Skills'
import dataContent from '../../Data/dataContent'
import { AboutContainer } from './AboutStyles'

const About = () => {
    return(
        <AboutContainer>
            <Description 
	      title='Hi there!'
                text={dataContent.aboutDescription}
                />
            <div className='skills__container'>
                <Skills 
                    title='My technologies stack'
                    skills={dataContent.skills}
            />
            </div>
        </AboutContainer>
    )
}

export default About
