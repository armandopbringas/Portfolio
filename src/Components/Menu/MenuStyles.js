import styled from 'styled-components'

export const ToggleMenu = styled.ul`
  list-style: none;
  background-color: #141414;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  .ToogleMenu_list {
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 8em;

    .ToggleMenu_item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5em;
    }

    .toggleMenu_link {
      font-size: 1.25rem;
      text-decoration: none;
    }
  }
`
