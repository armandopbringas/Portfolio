import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav className='header'>
      <h1>Portofolio</h1>
    </Nav>
  );
}

export default Header

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`