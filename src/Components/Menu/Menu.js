import React from 'react'
import { ToggleMenu } from './MenuStyles'

const Menu = ({ open }) => {


  return (
    <ToggleMenu open={open}>
      <ul className='ToogleMenu_list'>
        <li
          className='ToggleMenu_item'
        >
          About
        </li>
        <li
          className='ToggleMenu_item'
        >
          Projects
        </li>
        <li
          className='ToggleMenu_item'
        >
          Contact
        </li>
      </ul>
    </ToggleMenu>
  )
}

export default Menu
