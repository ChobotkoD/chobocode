import styled from "styled-components";



export const ExperienceSection = styled.section`
    padding: 8rem 0;
    position: relative;
`

export const ExperienceInfo = styled.div`
    padding-top: 4rem;
`

export const ExperienceFrontend = styled.div`
    padding-bottom: 1rem;
    h3{
        text-align: center;
        color: var(--color-primary);
        font-size:1.3rem;
        padding: 1rem 0 1rem 0;
    }
`

export const ExperienceBackend = styled.div`
    padding-bottom: 1rem;
    h3{
        text-align: center;
        color: var(--color-primary);
        font-size:1.3rem;
        padding: 1rem 0 1rem 0;
    }
`

export const ExperienceDesign = styled.div`
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

    .ExperienceIcons{
        color:var(--color-primary);
        font-size: 1.75rem;
    }

    article{
        width: 150px;
        height: 50px;
        div{
            display: flex;
            justify-content: flex-start;
            gap: 1.3rem;
        }
        h5{
            text-align: center;
            color: var(--color-light);
            font-size: 0.8rem;
        }
    }
`

export const AsideDesign = styled.aside`
    position: absolute;
    right: -220px;
    bottom: -150px;
    width: 600px;
    height: 360px;
    border-radius: 1rem;
    background: linear-gradient(109.61deg,#4c4f5a 4.26%,#202125 84.84%);
    line-height: 1.5rem;
    @media screen and (max-width: 1920px){
        right: -120px;
        width: 450px;
        height: 300px;
        article > h3 {
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 1024px){
        position: unset;
        width: max-content;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        gap: 1rem;
        padding: 1rem;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`

export const AsideZeroDesign = styled.article`
    position: absolute;
    width: 360px;
    height: 220px;
    top: 4rem;
    left: -3rem;
    background-color:#4db5ff42;
    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1920px){
        left: -10rem;
        width: 320px;
        height: 180px;
    }
    @media screen and (max-width: 1024px){
        position: static;
    }
`
export const AsideZeroDesignTitle = styled.h3`
    transition: all 2s ease;
    font-size: 2rem;
    color: #00f9f9;
    position: absolute;
    left: -4rem;
    transform: ${ props => props.value ? 'translateX(10rem)' : 'translateX(0rem)'};
    opacity: ${ props => props.value ? '100%' : '0'};
    transform: ${props => props.vl ? 'translateX(10rem) scale(1.8,1.8) rotateX(360deg) ' : ''};
    @media screen and (max-width: 1024px){
        position: relative;
        transform: ${ props => props.value ? 'translateX(4rem)' : 'translateX(0rem)'};
        transform: ${props => props.vl ? 'translateX(4rem) scale(1.8,1.8) rotateX(360deg) ' : ''};
    }
`
   

export const AsideFirstDesign = styled.article`
    position: absolute;
    width: 325px;
    height: 120px;
    top: -30px;
    right: 20px;
    background-color: #1d1e22;
    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
    border-radius: 6px; 
    @media screen and (max-width: 1024px){
        position: static;
    }

    p{
        width: 0;
        margin: 0 0 -1rem; 
        margin-left: 2rem;
        border-right: 0.15em solid transparent;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
    }
    
    .firstp1{
        animation: ${props => props.value ? 'firstcode 1s steps(32) 1s forwards': ''} ;   
    }

    @keyframes firstcode { 
        0%{ width: 0; }
        100%{width: 320px;}  
    }

    .first1, .first5{
        color: #a88038;
    }
    .first2{  
        color: #e1ca72;
    }
    .first4{
        color: #74b087;
    }
    .first6{   
        color: #c4c0c0;
    } 
`

export const AsideSecondDesign = styled.article`
    position: absolute;
    width: 325px;
    height: 120px;
    top: 100px;
    right: -20px;
    background-color: #1d1e22;
    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
    border-radius: 6px;
    @media screen and (max-width: 1024px){
        position: static;
    }

    p{
        width: 0;
        margin: 0 0 -1rem; 
        margin-left: 2rem;
        border-right: 0.15em solid transparent;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
    }

    .secondp1{
        animation: ${props => props.value ? 'secondcode 1s ease-in 2s forwards': ''};    
    }
    .secondp2{
        animation: ${props => props.value ? 'secondcode 1s steps(32) 3s forwards': ''};    
    }
    .secondp3{
        animation: ${props => props.value ? 'secondcode 1s steps(32) 4s forwards': ''};    
    }
    .secondp4{
        animation: ${props => props.value ? 'secondcode 0.3s steps(11) 5s forwards': ''}; 
    }

    @keyframes secondcode { 
        0%{ width: 0; }
        100%{width: 320px;}  
    }

    .second1{
        color: #74b087;
    }
    .second3{
        padding-left: 2rem;
        color: #1e94c0;
    }
    .second4{
        padding-left: 10px;
        color: var(--color-primary);
    }
    .second5{
        padding-left: 2rem;
        color: #1e94c0;
    }
    .second6{
        padding-left: 10px;
        color: #a16671;
    }
    .second7{
        color: #f65e7a;
    }
    .second8{
        color: #c4c0c0;
    }

    .second9{
        color: #c4c0c0;
        padding-left: 10px;
    }
`
export const AsideThirdDesign = styled.article`
    position: absolute;
    width: 375px;
    height: 120px;
    top: 230px;
    right: 30px;
    background-color: #1d1e22;
    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
    border-radius: 6px;
    line-height: 1.8rem;

    @media screen and (max-width: 1024px){
        position: static;
    }
        
    p{
        width: 0;
        margin: 0 0 -1rem; 
        margin-left: 2rem;
        border-right: 0.15em solid transparent;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
    }

    .thirdp1{
        animation: ${props => props.value ? 'thirdcode 1s steps(22) 5.5s forwards': ''}; 
    }
    .thirdp2{
        animation: ${props => props.value ? 'thirdcode 1s steps(22) 6.5s forwards': ''}; 
    }
    @keyframes thirdcode { 
        0%{ width: 0; }
        100%{width: 375px;}  
    }

    .third1{
        color: #174bea;
    }
    .third2{
        color: #c4c0c0;
    }
    .third3{
        color: red;
    }
    .third4{
        color: #c4c0c0;
    }
    .third5{
        color: #00bd48;
    }
    .third6, .third8{
        color: #c4c0c0;
    }
    .third7{
        color: #fcdb04;
    }
    .third9{
        color: #ff0000;
    }


`