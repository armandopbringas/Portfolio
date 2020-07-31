import React from 'react'
import { DescriptionStyles } from './DescriptionStyles'

const Description = ({ title = '', text = '' }) => {
    return (
        <DescriptionStyles>
            <h1 className='descriptionTitle'>
                {title}
            </h1>
            <p 
                className='descriptionText'
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </DescriptionStyles>
    )
}

export default Description
