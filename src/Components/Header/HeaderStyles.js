import styled from 'styled-components'

export const HeaderContanier = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  .headerTitle_container {
    max-width: 100%;
    margin-left: 2rem;
    line-height: 2rem;
    text-decoration: none;
  }

  .headerTitle_name {
    font-size: 1rem;
    font-weight: 400;
  }

  .headerTitle_title {
    width: 100%;
    font-size: 0.8rem;
  }
  
  .navMenu_container {
    display: none;
    margin-right: 2rem;
  }

  .navMenulist {
    display: flex;
    align-items: center;
  } 

  .navMenuist_item {
    margin: 0 1.5rem;
  }

  .navMenuist_item:nth-child(3) {
    margin-right: 0;
  }

  .navMenuist_link {
    text-decoration: none;
  }
 
  .headerTitle_container,
  .navMenuist_link:focus {
    outline: none;
  }

  /* @media screen and (max-width: 768px) {
    .navMenu_container {
      display: none;
    }
  } */
`
