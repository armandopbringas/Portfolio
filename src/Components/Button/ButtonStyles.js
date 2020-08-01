import styled from 'styled-components'

export const StyledButton = styled.div`
  right: 2.5rem;
  z-index: 1000;
  display: block;
  cursor: pointer;
  position: relative;

  .buttonContainer {
    font-size: 3.5rem;
    transition: all 0.4s linear;
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  @media screen and (max-width: 600px) {
    right: 1rem;
  }
`
