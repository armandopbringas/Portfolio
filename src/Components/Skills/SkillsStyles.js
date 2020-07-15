import styled from 'styled-components'

export const SkillsContainer = styled.div`
width: 100%;
padding: 2em;
margin-right: 2em;
display: flex;
flex-direction: column;
align-items: flex-end;

h1 {
 display: flex;
 margin-bottom: 0.75em;
 font-size: 1.5em;
 font-weight: 400;
}

@media screen and (max-width: 768px) {
    align-items: flex-start;
}
`
