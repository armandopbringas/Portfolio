import styled from 'styled-components'

export const DescriptionStyles = styled.div`
text-align: start;
margin: 0 2em;

.description__container {
    width: 75%;

    h1 {
        font-weight: 400;
        margin-bottom: 0.75em;
        font-size: 1.5em;
    }

    p {
        line-height: 1.5em;
    }
}

@media screen and (max-width: 768px) {
    .description__container {
        width: 100%;
    }
}

`
