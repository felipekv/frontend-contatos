import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--color-grey-3);
  padding-inline: 1rem;
  border-radius: 0.5rem;

  h2{
    color: white;
  }

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
        max-width: 5rem;
        text-align: center;
        font-size: 1rem;

        &:hover {
            background-color: var(--color-primary-focus);
        }
    }
`;