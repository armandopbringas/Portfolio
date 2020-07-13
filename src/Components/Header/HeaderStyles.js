import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 2em;
  justify-content: space-between;
 
  .Nav__title {
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

  .Nav__menuContainer {
    margin-right: 2.5%;

    .Nav__menuList {
      display: flex;
    } 

    a, li {
      margin: 0;
      padding: 0 1.25em;
      text-decoration: none;
    }

    a:focus {
      outline: none;
    }

    .Nav__menuList--item {
      font-size: 18px;
    }
  }
 
  @media screen and (max-width: 768px) {
    .Nav__menuContainer {
      display: none;    
    }
  }
`
