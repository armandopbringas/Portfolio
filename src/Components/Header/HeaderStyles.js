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
      align-items: center;
    } 

    li {
      margin: 0 1.5em;
      text-decoration: none;
    }

    a:focus {
      outline: none;
    }

    .Nav__menuList--item {
      font-size: 1.5em;
    }
  }
 
  @media screen and (max-width: 600px) {
    .Nav__menuContainer {
      display: none;    
    }
  }
`
