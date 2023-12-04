import styled from "styled-components";

export const HomeMain = styled.main`
    background-color: var(--color-grey-3);
    width: 90%;
    height: 500px;
    border-radius: 0.625rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    text-align: center;
    gap:20%;
    padding-top: 2rem;
    padding-bottom: 4rem;
    
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-self: center;
        margin-top: 2rem;
        justify-content: center;
        gap: 1rem;
        align-items: center;

        h1{
            font: 2rem sans-serif;
            font-weight: 600;
            color: var(--color-grey-1)
        }

        img{
            width: 150px;
            height: 150px;
            border-radius: 15px;
            margin-top: 1rem;
        }

        a{
            background-color: var(--color-primary);
            padding-inline: 0.8rem;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
            border-radius: 0.25rem;
            font-family: "Inter", sans-serif;
            font-weight: 600;
            color: white;
            width:60%;
            max-width: 15rem;

            &:hover{
                background-color: var(--color-primary-focus);
            }

        }
    }
`