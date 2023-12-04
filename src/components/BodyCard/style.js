import styled from "styled-components";

export const StyledBodyCard = styled.li`
    width: 100%;
    background-color: var(--color-grey-3);
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    height: 30px;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-top: 0.5 solid white;
        justify-content: center;
        align-items: center;
    }
    .name {
        width: 25%;
        border-right: 1px solid white;
    }
    .email {
        width: 35%;
        border-right: 1px solid white;
    }
    .phone {
        width: 25%;
        border-right: 1px solid white;
    }
    .actions {
        width: 15%;
        gap: 10px;
        button {
            width: 24px;
            height: 24px;
            background-color: transparent;
            &:hover{
                background-color: var(--color-grey-2);
                border-radius: 4px;
            }
            img {
                width: 24px;
                height: 24px;
                filter:invert(100%)
            }
        }
    }
`;
