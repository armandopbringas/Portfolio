// @flow 
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { ContactContainer } from './ContactStyles'

const Contact = () => {
    return (
        <ContactContainer>
            <div className='infoContent'>
                <h1>Contact me!</h1>
                <p>If you want to get in touch you can find me at:</p>
                <ul>
                    <li>
                        <a 
                            href='mailto:bringas.armandop@gmail.com'
                            rel='noopener noreferrer'
                        >
                            <FaEnvelope
                                className='contact__mail--icon' 
                            />
                            bringas.armandop@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </ContactContainer>
    )
}

export default Contact
