import React from 'react'
import { FooterContainer } from './FooterStyles'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <ul className='footerSM_menuList'>
                <li 
                    className='footerSM__menuList--item'
                >
                    <a 
                        target='_blank' 
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/armandopbringas'
                    >
                        <FaLinkedin />
                    </a>
                </li>
                <li
                    className='footerSM__menuList--item'
                >
                    <a
                        target='_blank' 
                        rel='noopener noreferrer'
                        href='https://github.com/armandopbringas'
                    >
                        <FaGithub />
                    </a>
                </li>
                <li
                    className='footerSM__menuList--item'
                >
                    <a 
                        rel='noopener noreferrer'
                        href='mailto:bringas.armandop@gmail.com'
                    >
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
        </FooterContainer>
    )
}

export default Footer
