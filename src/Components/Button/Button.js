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
      >
        <div
          onClick={showMenu}
          className='buttonContainer'
        >
          +
        </div>
      </StyledButton>
      <Menu 
        open={open}
        showMenu={showMenu}
      />
    </>
  )

}

export default Button
