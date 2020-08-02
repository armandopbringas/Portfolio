import styled from 'styled-components'

export const RepoContainer = styled.li`

.repoContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .repoLink {
        margin: 0.5rem 0;
        font-weight: 400;
        text-decoration: none;
    }

    .repoUpdate,
    .repoDescription {
        margin: 0.25rem 0;
    }

    @media screen and (max-width: 600px) {
        .repoLink {
            font-size: 1rem
        }
        .repoUpdate, 
        .repoDescription {
            font-size: 0.8rem;
        }
    }
}
`
