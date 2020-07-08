import React, { useState } from 'react'
import { StyledButton } from './ButtonStyles'
import Menu from '../Menu/Menu'

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
