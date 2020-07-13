import React from 'react'
import { FooterContainer } from './FooterStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <span>Copyright© {new Date().getFullYear()}, Armando Bringas</span>
            </div>
        </FooterContainer>
    )
}

export default Footer
