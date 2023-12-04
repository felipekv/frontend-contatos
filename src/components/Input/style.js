import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  padding-inline: 1rem;
  border: 1.5px solid var(--color-grey-2);
  border-radius: 0.25rem;
  background-color: var(--color-grey-2);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-title);
  color: white;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::placeholder {
    color: var(--color-grey-1);
  }

  &:focus {
    border: 1.5px solid var(--color-grey-0);

    &::placeholder {
      color: var(--color-grey-2);
    }
  }

  @media (max-width: 768px) {
    height: 2.4063rem;
    padding-inline: 0.8125rem;
    font-size: 0.8125rem;
  }
`;