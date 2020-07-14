import styled from 'styled-components'

export const ToggleMenu = styled.ul`
  list-style: none;
  background-color: #141414;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  bottom: 7.5em;
  right: 0;
  height: 70vh;
  width: 22%;
  transition: transform 0.5s ease-in-out;

  .ToogleMenu_list {
    height: 50%; 
    display: flex;
    line-height: 5em;
    flex-direction: column;
    align-items: center;

    .ToggleMenu_item, li {
      text-decoration: none;

      .GitHub-sm,
      .Linkedin-sm,
      .mailIcon {
        font-size: 1em;
      }

    }
  }
`
