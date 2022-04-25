import styled from 'styled-components'




export const ContactSection = styled.section`
padding: 8rem 0;
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
    height: 135px;
    background-color: var(--color-bg-variant);
    border-radius: 2rem;
    user-select: text;
    h6{
        padding-top:1rem;
    }
    h5{
        font-size: 0.9rem;
    }
    small{
        color: var(--color-primary);
        text-align: center;
    }
    &:nth-child(3) small{
        color: var(--color-white);
    }
`

export const ContactDirectForm = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    /* background-color: var(--color-bg-variant); */
    input, textarea{
        padding: 1rem;
        border-radius: 0.5rem;
        border:  1px solid var(--color-primary);
        background-color: transparent;
        backdrop-filter: blur(1.2px);
        color: var(--color-white);
        resize: none;
        @media screen and (max-width: 600px){
        backdrop-filter: unset;
    }
        &::placeholder {
            color: var(--color-light);
            font-weight: 300;
            font-size: 0.8rem;
        }   
        &:focus{
            outline: 1.5px outset var(--color-primary);
        }
    }

    


    button{
        align-self: center;
    }
    .emptyName{
        position: absolute;
        left: calc(50% - (60px));
        top: 10px;
        color: red;
    }
    .emptyMail{
        position: absolute;
        left: calc(50% - (56px));
        top: 72px;
        color: red;
    }
    .emptyMessage{
        position: absolute;
        left: calc(50% - (66px));
        top: 132px;
        color: red;
    }

    
`
// SPINNER
export const ContactSpinner = styled.div`
margin: 0 auto;
display: inline-block;
position: relative;
width: 80px;
height: 80px;
visibility: ${({btnDisable}) => btnDisable ? 'visible' : 'hidden'};

div {
position: absolute;
top: 33px;
width: 13px;
height: 13px;
border-radius: 50%;
background: var(--color-primary);
animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
div:nth-child(1) {
left: 8px;
animation: lds-ellipsis1 0.6s infinite;
}
div:nth-child(2) {
left: 8px;
animation: lds-ellipsis2 0.6s infinite;
}
div:nth-child(3) {
left: 32px;
animation: lds-ellipsis2 0.6s infinite;
}
div:nth-child(4) {
left: 56px;
animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
0% {
transform: scale(0);
}
100% {
transform: scale(1);
}
}
@keyframes lds-ellipsis3 {
0% {
transform: scale(1);
}
100% {
transform: scale(0);
}
}
@keyframes lds-ellipsis2 {
0% {
transform: translate(0, 0);
}
100% {
transform: translate(24px, 0);
}
}

`

 

    
