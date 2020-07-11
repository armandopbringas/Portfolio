import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { Nav } from './HeaderStyles'

const Header = () => {

  return (
    <Nav>
      <div className='Nav__title'>
        <h4>Armando Bringas</h4>
        <p>Frontend Developer</p>
      </div>
      <div className='Nav__menuContainer'>
        <ul className='Nav__menuList'>
            <li>
              <Link
               to='/'
               className='Nav__menuList--item'>
                About
              </Link>
            </li>
            <li>
              <Link
               to='/projects'
               className='Nav__menuList--item'>
                Projects
              </Link>
            </li>
            <li>
              <Link
               to='/contact'
               className='Nav__menuList--item'>
                Contact
              </Link>
            </li>
        </ul>
      </div>
      <Button />
    </Nav>
  )
}

export default Header
