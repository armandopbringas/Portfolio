import styled from 'styled-components'

export const ToggleMenu = styled.ul`
  list-style: none;
  background-color: #141414;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 8em;
  right: 0;
  height: 45vh;
  width: 100vw;
  transition: transform 0.5s ease-in-out;

  .ToogleMenu_list {
    height: 100%; 
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: 5em;
    margin-left: 1em;

    .ToggleMenu_item, li, a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5em;

      .ToggleMenu__mailIcon,
      .ToggleMenu__LinkedinIcon,
      .ToggleMenu__GHIcon {
        margin-right: 0.5em;
      }

    }
  }
`
