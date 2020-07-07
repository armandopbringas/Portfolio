import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

const Button = () => {

  const [open, setOpen] = useState(false)

  const showMenu = () => {
    setOpen(!open)
  }
  
  return (
    <>
      <StyledButton 
        open={open} 
        onClick={showMenu}
      >
        <div />
        <div />
        <div />
      </StyledButton>
      <Menu open={open}/>
    </>
  )

}

export default Button

const StyledButton = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 5.5%;
  right: 8%;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.07rem;
    background-color: #ccc;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
