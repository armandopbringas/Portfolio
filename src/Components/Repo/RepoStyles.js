import styled from 'styled-components'

export const RepoContainer = styled.li`
margin: 1em 0;
width: 100%;

.repo__content {
    a {
        margin: 1em 0;
        font-weight: 400;
        text-decoration: none;
        font-size: 1.25em;
    }

    p{
        margin: 1em 0;
    }
}

.line {
    content: '';
    height: 1px;
    width: 97.5%;
    background-color: #ccc;
    z-index: 10;
}
`
