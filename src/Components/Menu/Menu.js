import React from 'react'
import { ToggleMenu } from './MenuStyles'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Menu = ({ open }) => {


  return (
    <ToggleMenu open={open}>
      <ul className='ToogleMenu_list'>
        <li
          className='ToggleMenu_item'
        >
          <a
            target='_blank' 
            rel='noopener noreferrer'
            href='https://github.com/armandopbringas'
          >
            <FaGithub className='GitHub-sm' />
            <span>@armandopbringas</span>
          </a>
        </li>
        <li
          className='ToggleMenu_item'
        >
          <a 
            target='_blank' 
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/armando-p%C3%A9rez-bringas/'
          >
            <FaLinkedin className='Linkedin-sm' />
            <span>armandopbringas</span>
          </a>
        </li>
        <li
          className='ToggleMenu_item'
        >
          <a 
            rel='noopener noreferrer'
            href='mailto:bringas.armandop@gmail.com'
          >
            <FaEnvelope className='mailIcon' />
            <span>bringas.armandop@gmail.com</span>
          </a>
        </li>
      </ul>
    </ToggleMenu>
  )
}

export default Menu
