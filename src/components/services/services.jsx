import styled from 'styled-components'

import BG from '../../assets/bg.jpg'

export const ServicesBackground = styled.div`
    background-image: url(${BG});
    background-attachment: fixed;
    background-size: cover;
    z-index: -999!important;
`


export const ServicesSection = styled.section`
    padding: 8rem 0;
    h2, h5{
       position: relative;
   }
`


export const ServicesArticles = styled.div`
    display: grid;
    grid-template-columns: 222px 222px 222px;
    justify-content: center;
    column-gap: 2rem;
    margin-top: 3rem;

    @media screen and (max-width:1024px){
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 0.5rem;
        article>ul>li{
            font-size: 0.8rem;
        }
        article>ul{
            padding: 0.3rem;
        }
        article>ul>li:before{
            padding-right: 0.3rem;
        }
    }

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        padding-left:5rem;
        padding-right:5rem;
        margin-top: 4rem;
        article{
            margin-bottom: 2rem;
        }
    }
`
export const ServicesArticle = styled.article`
    background-color: var(--color-bg-variant);
    border: 1px solid var(--color-primary);
    border-radius: 0 0 2rem 2rem;
    height: max-content;
    height: 245px;
    
    div{
        padding: 2rem;
        height: 80px;
        background-color: var(--color-primary);
        border-radius: 0 0 2rem 2rem;
        text-align: center;
        color: black;
    }
    ul{
        padding: 1rem;
    }
    ul>li{
        padding-bottom: 0.5rem;
        line-height: 1rem;
        font-weight: 300;
        font-size: 0.95rem;
    }
    ul>li:before{
        content: '\\2714';
        font-size: 0.8rem;
        padding-right: 1.2rem;
        color: var(--color-primary);
    }
    @media screen and (max-width: 600px){
        height: 225px;
    }
`