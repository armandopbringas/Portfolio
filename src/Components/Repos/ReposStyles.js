import styled from 'styled-components'

export const ReposContainer = styled.div`
display: flex;
padding: 2em;

.repos__container {
    width: 100%;    
    margin: 0 2em;
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 1.5em;
        margin-bottom: 0.75em;
    }

    .repo__link, a {
        text-decoration: none;
        text-align: center;
        margin-top: 2em;
    }

}
`
