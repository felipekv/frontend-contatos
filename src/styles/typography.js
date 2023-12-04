import styled, { css } from "styled-components";

export const Title = css`
  font-family: "Inter", sans-serif;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-title);
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
`;

export const Paragraph = css`
  font-family: "Inter", sans-serif;
  font-size: var(--font-size-paragraph);
  color: ${({ color }) => (color ? color : "var(--color-grey-0)")};
  font-weight: 500;
`;

export const StyledH2 = styled.h2`
  ${Title};
  font-weight: 600;
`;

export const StyledH3 = styled.h3`
  ${Title};
  font-weight: 500;
`;

export const StyledParagraph = styled.p`
  ${Paragraph};
  font-weight: 400;
`;

export const StyledLabel = styled.label`
  ${Paragraph};
  font-weight: 500;
`;