import styled from "styled-components";
import {BsPatchCheckFill} from 'react-icons/bs'

export const ExperienceIcon = styled(BsPatchCheckFill)`
    color:var(--color-primary);
    font-size: 1.75rem;
`



export const ExperienceSection = styled.section`
    padding-top: 8rem;
`

export const ExperienceInfo = styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 1.5rem;
padding-top: 4rem;
@media screen and (max-width: 1024px){
    flex-direction: column;
}
`

export const ExperienceFrontend = styled.div`
flex:1;
border-radius: 10px;
background-color: var(--color-bg-variant);
max-width: 430px;
min-width: 350px;
padding-bottom: 1rem;
h3{
    text-align: center;
    color: var(--color-primary);
    font-size:1.3rem;
    padding: 1rem 0 1rem 0;
}
`

export const ExperienceBackend = styled.div`
flex:1;
border-radius: 10px;
background-color: var(--color-bg-variant);
max-width: 430px;
min-width: 350px;
padding-bottom: 1rem;
h3{
    text-align: center;
    color: var(--color-primary);
    font-size:1.3rem;
    padding: 1rem 0 1rem 0;
}
`


export const ExperienceArticles = styled.div`
display: flex;
flex: 1;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;

article{
    width: 150px;
    height: 50px;
    div{
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
    }
    h5{
        text-align: center;
        color: var(--color-light);
        font-size: 0.8rem;
    }
   
}
`