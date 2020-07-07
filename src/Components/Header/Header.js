import React from 'react'
import Button from '../Button/Button'
import styled from 'styled-components'

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
  );
}

export default Header

const Nav = styled.nav`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  .who {
    max-width: 100%;
    margin-left: 2em;
    line-height: 2em;
  }

  h4 {
    font-size: 1em;
    font-weight: 400;
  }

  p {
    width: 100%;
    font-size: 0.8em;
  }

  .menuContainer {
    margin-right: 2.5%;
  }

  .menu__list {
    display: flex;
  } 

  a, li {
    margin: 0;
    padding: 0 1.25em;
    text-decoration: none;
  }

  .menu__list--item {
    font-size: 18px;
  }
 
  @media screen and (max-width: 768px) {
    .menuContainer {
      display: none;    
    }
  }

`
