import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 800px;
    width: 100%;
    padding: 2.625rem 1.375rem 2.625rem 1.375rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-3);
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    text-align: center;
    margin-top: 4rem;
    align-self: center;

    h2 {
        color: white;
    }

    a,
    button {
        background-color: var(--color-primary);
        padding-inline: 0.8rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-radius: 0.25rem;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        color: white;
        width: 60%;
        max-width: 15rem;
        text-align: center;
        font-size: 1rem;

        &:hover {
            background-color: var(--color-primary-focus);
        }
    }
    .betweenButtonsParagraph {
        font-weight: 500;
        color: var(--color-grey-1);
    }
`;
