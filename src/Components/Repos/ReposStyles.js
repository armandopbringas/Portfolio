import styled from 'styled-components'

export const ReposContainer = styled.div`
height: 70vh;
display: flex;
padding: 0 2rem;

.reposContainer {
    width: 100%;    
    margin: 0 2rem;
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

    @media screen and (max-width: 768px) {
        .reposTitle {
            font-size: 1rem;
        }

        .reposLink {
            font-size: 0.8rem
        }
    }

    @media screen and (max-width: 425px) {
        .reposTitle {
            font-size: 0.8rem;
        }

        .reposLink {
            font-size: 0.4rem
        }
    }
}

`
