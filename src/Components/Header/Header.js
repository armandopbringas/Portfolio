import React from 'react'
import Button from '../Button/Button'
import { Nav } from './HeaderStyles'

const Header = () => {

  return (
    <Nav className='header'>
      <div>
        <div className='who'>
          <h4>Armando Bringas</h4>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div className='menuContainer'>
        <ul className='menu__list'>
            <li>
              <div className='menu__list--item' to='/'>
                About
              </div>
            </li>
            <li>
              <div className='menu__list--item' to='/projects'>
                Projects
              </div>
            </li>
            <li>
              <div className='menu__list--item' to='/contact'>
                Contact
              </div>
            </li>
        </ul>
      </div>
      <Button />
    </Nav>
  )

}

export default Header
