import styled from 'styled-components'



export const FooterSection = styled.footer`
    margin-top: 8rem;
    background-color: var(--color-primary);
    color: black;
    `

export const FooterArea = styled.div`
    min-height: 100px;
    max-height: max-content;
    text-align: center;
    padding-bottom: 6rem;
    h2{
        font-size: 2rem;
        padding: 3rem 0;
    }
@media screen and (max-width: 600px){
    h2{
        font-size: 1.2rem;
        padding: 1.5rem 0;
    }
    ul>li{
        padding-right: 6px;
        font-size: 0.8rem;
    }
    padding-bottom: 2rem;
}
`

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    ul{
        display: flex;
        padding: 1rem 0;
        li{
            padding-right: 1rem;
        }
    }
`

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    font-size: 3rem;
    padding-bottom: 2rem;
`