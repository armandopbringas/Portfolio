import React from 'react'
import { ReposContainer } from './ReposStyles'

const Repos = ({ title }) => {
    return (
        <ReposContainer>
            <h1>{ title }</h1>
        </ReposContainer>
    )
}

export default Repos
