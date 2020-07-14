import styled from 'styled-components'

export const SkillsContainer = styled.div`
width: 75%;
padding: 2em;
margin-right: 2em;

h1 {
 display: flex;
 margin: 0;
 font-size: 24px;
 font-weight: 500;
 justify-content: flex-end;
}

@media (max-width: 768px) {
 h1 {
    font-size: 18px;
 }
}
`
