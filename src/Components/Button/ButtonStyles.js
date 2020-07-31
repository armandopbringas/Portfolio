import styled from 'styled-components'

export const StyledButton = styled.div`
  right: 1rem;
  z-index: 1000;
  display: none;
  cursor: pointer;
  position: relative;

  .buttonContainer {
    font-size: 3.5rem;
    transition: all 0.4s linear;
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`
