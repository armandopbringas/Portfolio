import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { InfoContainer } from './InfoStyles'

const Contact = () => {
    return (
        <InfoContainer>
            <h1 className='infoTitle'>
                Contact me!
            </h1>
            <p className='infoText'>
                If you want to get in touch you can find me at:
            </p>
            <ul>
                <li>
                    <a 
                        className='infoLink_mail'
                        rel='noopener noreferrer'
                        href='mailto:bringas.armandop@gmail.com'
                    >
                        <FaEnvelope
                            className='infoMail_icon' 
                        />
                        bringas.armandop@gmail.com
                    </a>
                </li>
            </ul>
        </InfoContainer>
    )
}

export default Contact
