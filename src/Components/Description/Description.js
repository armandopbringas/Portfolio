import React from 'react'
import { DescriptionStyles } from './DescriptionStyles'

const Description = ({ title = '', text = '' }) => {
    return (
        <DescriptionStyles>
            <div className='description__container'>
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </DescriptionStyles>
    )
}

export default Description
