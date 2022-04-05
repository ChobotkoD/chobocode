import styled from 'styled-components'
import {AiFillSetting, AiOutlineTeam, AiOutlineAudit} from 'react-icons/ai'

export const ExperienceIcon = styled(AiFillSetting)`
    
`;
export const ClientsIcon = styled(AiOutlineTeam)`
    
`;
export const ProjectsIcon = styled(AiOutlineAudit)`
    
`;


export const AboutSection = styled.section`
    /* h2{
        color:var(--color-primary);
        font-size: 2rem;
    } */


`
export const AboutInfo = styled.div`
display:flex;
justify-content: center;
padding-top: 4rem;
`

export const AboutImage = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex: 1;
    div{
            background-color: var(--color-primary-variant);
            opacity: 0.6;
            border-radius: 3rem;
            border: 1px solid rgba(0,212,255,0.7439824945295405);
            img{
                height: 350px;
                width: 100%;
                border-radius: 3rem;
                transform: rotate(15deg);
                transition: all 1s ease;
                &:hover{
                    transform: rotate(0deg);   
                }
            }
        
            &:hover{
                opacity:1;
            }
        }
`

export const AboutInformation = styled.div`
flex: 1;
a{
    margin-top: 2rem;
}
.AboutInformationArticles{
    display:flex;
    gap: 1rem;
    justify-content: center;
    
    article{
        flex: 1;
        padding: 0.1rem;
        background-color: var(--color-bg-variant);
        border-radius: 10px;
        text-align: center;
        z-index: 4;
        p{
            font-variant: small-caps;
            font-weight: 100;
            font-size: 0.6rem;
        }
    }
}

.AboutInformationText{
    padding-top: 2rem;
    color: var(--color-light);
    font-size: 0.8rem;
}
`

