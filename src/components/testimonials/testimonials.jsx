import styled from 'styled-components'


export const TestimonialsSection = styled.section`
    padding-top: 8rem;
    h2{
        padding-bottom: 2rem;
    }
`
export const TestimonialsArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    max-width: 40%;
    margin: 0 auto;
    background-color: var(--color-bg-variant);
    padding: 2rem;
    border-radius: 2rem;
    img{
        border-radius: 10rem;
        max-width: 100px;
    }
    h3{
        font-size: 1.5rem;
    }
    small{
        color: var(--color-light);
    }

    @media screen and (max-width: 1024px){
        max-width: 50%;
    }
    @media screen and (max-width: 600px){
        max-width: 80%;
    }
`