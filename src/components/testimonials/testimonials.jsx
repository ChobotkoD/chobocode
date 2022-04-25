import styled from 'styled-components'




export const TestimonialsSection = styled.section`
    padding-top: 8rem;
    h2{
        padding-bottom: 2rem;
    }
    .swiper{
        /* background-color: teal; */
    }
  
    .swiper-pagination-bullet{
       background-color: #fff;
       opacity: 0.7;
        }
    .swiper-pagination-bullet-active{
       background-color: var(--color-primary);
       opacity: unset;
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
    height: 350px;
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
        max-width: 60%;
    }
    @media screen and (max-width: 600px){
        max-width: 80%;
    }
`