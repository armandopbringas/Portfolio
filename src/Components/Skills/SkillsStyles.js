import styled from 'styled-components'

export const SkillsContainer = styled.div`
width: 100%;
height: 100%; 
display: flex;
margin: 0 2rem;
align-items: flex-end;
flex-direction: column;
justify-content: center;

.skillsTitle {
 display: flex;
 margin-bottom: 0.75em;
 font-size: 1.5em;
 font-weight: 400;
}

@media screen and (max-width: 768px) {
    .skillsTitle {
        font-size: 1rem;
    }
}
`
