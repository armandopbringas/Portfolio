import styled from 'styled-components'

export const ToggleMenu = styled.ul`
  list-style: none;
  background-color: #141414;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 7em;
  right: 0;
  height: 45vh;
  width: 100vw;
  transition: transform 0.5s ease-in-out;

  .ToogleMenu_list {
    height: 100%; 
    display: flex;
    line-height: 5em;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ToggleMenu_item {
      text-decoration: none;

      .ToggleMenu_item, li, a {
        font-size: 1.25em;
      }

      .GitHub-sm,
      .Linkedin-sm,
      .mailIcon {
        font-size: 1em;
      }

    }
  }
`
