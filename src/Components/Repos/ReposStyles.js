import styled from 'styled-components'

export const ReposContainer = styled.div`
display: flex;
padding: 0 2rem;

.reposContainer {
    width: 100%;    
    margin: 0.5rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .reposTitle {
        font-weight: 400;
        font-size: 1.5em;
        margin-bottom: 0.75em;
    }

    .reposLink {
        text-decoration: none;
        text-align: center;
        margin-top: 1em;
    }

    @media screen and (max-width: 600px) {
        .reposTitle {
            font-size: 1rem;
        }

        .reposLink {
            font-size: 0.8rem
        }
    }
}

`
