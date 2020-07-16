import styled from 'styled-components'

export const ContactContainer = styled.div`
padding: 2em;
text-align: center;

h1 {
    font-weight: 400;
    font-size: 1.5em;
    margin-bottom: 1.5em;
}

p {
    margin-bottom: 1.5em;
    font-weight: 300;
}

a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .contact__mail--icon {
        margin-right: 0.5em;
    }
}
`
