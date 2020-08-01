import styled from 'styled-components'

export const InfoContainer = styled.div`
height: 70vh;
display: flex;
padding: 0 2em;
align-items: center;
flex-direction: column;
justify-content: center;

.infoTitle {
    font-weight: 400;
    font-size: 1.5em;
    margin-bottom: 1.5em;
}

.infoText {
    margin-bottom: 1.5em;
    font-weight: 300;
}

.infoLink_mail {
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;

}

.infoMail_icon {
    margin-right: 0.5em;
}

@media screen and (max-width: 768px) {

    .infoTitle {
        font-size: 1rem;
    }

    .infoText {
        font-size: 0.8rem;
    }

    .infoLink_mail {
        font-size: 0.8rem;
    }
}
`
