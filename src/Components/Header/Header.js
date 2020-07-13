import React from 'react'
import Button from '../Button/Button'
import { Nav } from './HeaderStyles'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


const Header = () => {

  return (
    <Nav>
      <div className='Nav__title'>
        <h4>Armando Bringas</h4>
        <p>Frontend Developer</p>
      </div>
      <Button />
      <div className='Nav__menuContainer'>
        <ul className='Nav__menuList'>
            <li
              className='Nav__menuList--item'
            >
              <a
                target='_blank' 
                rel='noopener noreferrer'
                href='https://github.com/armandopbringas'
              >
                <FaGithub className='GitHub-sm' />
              </a>
            </li>
            <li 
              className='Nav__menuList--item'
            >
              <a 
                target='_blank' 
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/armando-p%C3%A9rez-bringas/'
              >
                <FaLinkedin className='Linkedin-sm' />
              </a>

            </li>
            <li
              className='Nav__menuList--item'
            >
               <a 
                  rel='noopener noreferrer'
                  href='mailto:bringas.armandop@gmail.com'
                >
                  <FaEnvelope className='mailIcon' />
                </a>
            </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Header
