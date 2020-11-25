import styled from 'styled-components'

export const DescriptionStyles = styled.div`
height: 100%;
display: flex;
margin: 1rem 2rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;

.descriptionTitle {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 0.75em;
}

.descriptionText {
    width: 70%;
    line-height: 1.5rem;
}

@media screen and (max-width: 900px) {
    .descriptionText {
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
    justify-content: flex-start;
    .descriptionTitle {
        font-size: 1rem;
    }

    .descriptionText {
        font-size: 0.8rem;
    }
}
`
