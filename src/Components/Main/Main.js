import React from 'react'
import Description from '../Description/Description'
import Skills from '../Skills/Skills'
import dataContent from '../../Data/dataContent'
import { MainContainer } from './MainStyles'

const Main = () => {
    return(
        <MainContainer>
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
        </MainContainer>
    )
}

export default Main
