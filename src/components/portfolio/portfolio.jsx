import styled from 'styled-components';



export const PortfolioSection = styled.section`
    padding-top: 8rem;
`


export const PortfolioExamples = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 3rem auto 0;
    
    @media screen and (max-width: 1024px){
        flex-direction: column;
        max-width: 480px;
    }
    @media screen and (max-width: 600px){}
    `

export const PortfolioExample = styled.article`
    flex: 1;
    text-align: center;
    padding: 2.2rem 1.5rem 1rem 1.5rem;
    background-color: var(--color-bg-variant);
    border-radius: 2rem;
    line-height: 4rem;
    
    overflow: hidden;
    
    /* &:hover{color:red;transform: skew(20deg);} */
    img{
        transition: all 1s ease;
        &:hover{
            transform: skewY(5deg)  scale(1.7,1.7);
            /* transform: rotateX(50deg); */
        }
    }
    
`