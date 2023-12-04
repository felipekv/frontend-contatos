import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-inline: 0.625rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2rem;

    @media (max-width: 768px) {
        max-width: 768px;
        padding-inline: 0.625rem;
    }
`;

export const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;