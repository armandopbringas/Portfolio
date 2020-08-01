import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { HeaderContanier } from './HeaderStyles'

const Header = () => {

  return (
    <HeaderContanier>
      <Link 
        to='/'
        className='headerTitle_container'
      >
        <h4 className='headerTitle_name'>Armando Bringas</h4>
        <p className='headerTitle_title'>Frontend Developer</p>
      </Link>
      <Button />
      <nav className='navMenu_container'>
        <ul className='navMenulist'>
          <li
            className='navMenuist_item'
          >
            <Link
              to='/'
              className='navMenuist_link'
            >
              About
            </Link>
          </li>
          <li 
            className='navMenuist_item'
          >
            <Link
              to='/projects'
              className='navMenuist_link'
            >
              Projects
            </Link>
          </li>
          <li
            className='navMenuist_item'
          >
            <Link
              to='/contact'
              className='navMenuist_link'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContanier>
  )
}

export default Header
