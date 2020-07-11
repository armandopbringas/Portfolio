import React from 'react'
import { Link } from 'react-router-dom'
import { ToggleMenu } from './MenuStyles'

const Menu = ({ open, setOpen }) => {
  
  return (
    <ToggleMenu open={open}>
      <ul className='ToogleMenu_list'>
        <li>
          <Link
            to='/'
            className='ToggleMenu_item'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/projects'
            className='ToggleMenu_item'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className='ToggleMenu_item'
          >
            Contact
          </Link>
        </li>
      </ul>
    </ToggleMenu>
  )
}

export default Menu
