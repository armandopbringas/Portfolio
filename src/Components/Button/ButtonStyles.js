import styled from 'styled-components'

export const StyledButton = styled.div`
  position: fixed;
  top: 2em;
  right: 3em;
  z-index: 20;
  display: none;
  cursor: pointer;

  .buttonContainer {
    font-size: 3.5em;
    transition: all 0.4s linear;
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
