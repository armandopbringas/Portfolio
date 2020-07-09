import styled from 'styled-components'

export const StyledButton = styled.div`
  position: fixed;
  top: 2em;
  right: 3em;
  z-index: 20;
  display: none;
  cursor: pointer;

  .button {
    font-size: 3.5em;
    transition: all 0.3s linear;
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`
