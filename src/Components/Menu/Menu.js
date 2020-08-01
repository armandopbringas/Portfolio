import React from 'react'
import { ToggleMenu } from './MenuStyles'
import { Link } from 'react-router-dom'

const Menu = ({ open, showMenu }) => {


  return (
    <ToggleMenu open={open}>
      <ul className='ToogleMenu_list'>
        <li
          className='ToggleMenu_item'
        >
          <Link 
            to='/'
            onClick={showMenu}
            className='toggleMenu_link'
          >
            About
          </Link>
        </li>
        <li
          className='ToggleMenu_item'
        >
          <Link 
            to='/projects'
            onClick={showMenu}
            className='toggleMenu_link'
          >
            Projects
          </Link>
        </li>
        <li
          className='ToggleMenu_item'
        >
          <Link
            to='/contact'
            onClick={showMenu}
            className='toggleMenu_link'
          >
            Contact
          </Link>
        </li>
      </ul>
    </ToggleMenu>
  )
}

export default Menu
