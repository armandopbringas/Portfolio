import React from 'react'
import { FooterContainer } from './FooterStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <span>Copyright© {new Date().getFullYear()}, Armando Bringas</span>
        </FooterContainer>
    )
}

export default Footer
