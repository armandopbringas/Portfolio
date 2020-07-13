import styled from 'styled-components'

export const ToggleMenu = styled.ul`
  list-style: none;
  background-color: #141414;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  bottom: 7.5em;
  right: 0;
  height: 70vh;
  width: 100vw;
  transition: transform 0.5s ease-in-out;

  .ToogleMenu_list {
    height: 100%; 
    display: flex;
    line-height: 10em;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
        font-size: 1.5rem;

      a:focus {
        outline: none;
      }

      .ToggleMenu_item {
        text-decoration: none;
      }

    }
  }
`
