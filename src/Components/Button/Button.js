import React, { useState } from 'react'
import { StyledButton } from './ButtonStyles'
import Menu from '../Menu/Menu'

const Button = () => {

  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledButton 
        open={open} 
      >
        <div
          onClick={() => setOpen(!open)}
          className='buttonContainer'
        >
          +
        </div>
      </StyledButton>
      <Menu open={open}/>
    </>
  )

}

export default Button
