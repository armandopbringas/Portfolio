import React from 'react';
import styled from 'styled-components';

const Menu = ({ open }) => {
  return (
    <ToggleMenu open={open}>
      <ul className='menuList'>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </ToggleMenu>
  )
}

export default Menu

const ToggleMenu = styled.ul`
  list-style: none;
  flex-flow: column nowrap;
  background-color: #141414;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  bottom: 0;
  right: 0;
  height: 80vh;
  width: 100vw;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  .menuList {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      line-height: 5em;
  }

`