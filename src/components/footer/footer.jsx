import styled from 'styled-components'



export const FooterSection = styled.footer`
    background-color: var(--color-primary);
    a{
        color: var(--color-bg);
        &:hover{
            color:var(--color-white);
        }
    }
    `

export const FooterArea = styled.div`
    min-height: 100px;
    max-height: max-content;
    text-align: center;
    padding-bottom: 4rem;
    h2{
        font-size: 2rem;
        padding: 1rem 0;
    }
    p{padding-top: 2rem;}
@media screen and (max-width: 600px){
    h2{
        font-size: 1.2rem;
        padding: 1.5rem 0;
    }
    p{
        font-size: 0.6rem;
        padding-top: 3rem;
    }
}
`

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    ul{
        display: flex;
        gap: 1rem;
    }
    @media screen and (max-width: 600px){
        ul{
            flex-direction: column;
        }
    }
`

// export const FooterSocials = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 3rem;
//     font-size: 3rem;
//     padding-bottom: 2rem;
// `