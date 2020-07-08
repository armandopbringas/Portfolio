import styled from 'styled-components'

export const Nav = styled.nav`
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 0 2em;
  justify-content: space-between;
 
  .who {
    max-width: 100%;
    margin-left: 2em;
    line-height: 2em;

    h4 {
      font-size: 1em;
      font-weight: 400;
    }

    p {
      width: 100%;
      font-size: 0.8em;
    }
  }

  .menuContainer {
    margin-right: 2.5%;

    .menu__list {
      display: flex;
    } 

    a, li {
      margin: 0;
      padding: 0 1.25em;
      text-decoration: none;
    }

    .menu__list--item {
      font-size: 18px;
    }
  }
 
  @media screen and (max-width: 768px) {
    .menuContainer {
      display: none;    
    }
  }
`
