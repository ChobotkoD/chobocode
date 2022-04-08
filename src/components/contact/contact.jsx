import styled from 'styled-components'




export const ContactSection = styled.section`
margin-top: 8rem;
`

export const ContactForms = styled.div`
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-column-gap: 12rem;

    @media screen and (max-width: 1024px){
        grid-template-columns: 4fr 8fr;
        grid-column-gap: 2rem;
    }

    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const ContactMessagersForms = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    `
export const ContactArticleForm = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;
    background-color: var(--color-bg-variant);
    border-radius: 2rem;
    h6{
        padding-top:1rem;
    }
    h5{
        font-size: 0.9rem;
    }
    small{
        color: var(--color-primary);
    }
`

export const ContactDirectForm = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    /* background-color: var(--color-bg-variant); */
    input, textarea{
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-primary);
        background-color: transparent;
        backdrop-filter: blur(1.2px);
        color: var(--color-white);
        resize: none;
        &::placeholder {
            color: var(--color-light);
            font-weight: 300;
            font-size: 0.8rem;
        }   
    }
    button{
        align-self: center;
    }
`