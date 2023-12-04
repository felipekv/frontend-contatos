import styled from "styled-components";

export const StyledHeadCard = styled.li`
    width: 100%;
    background-color: var(--color-grey-3);
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 2px;
    border-color: white;
    display: flex;
    flex-direction: row;
    height: 30px;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-bottom: 1px solid white;
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
    }
`;
