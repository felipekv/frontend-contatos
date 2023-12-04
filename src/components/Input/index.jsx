import { StyledLabel, StyledParagraph } from "../../styles/typography.js";
import { StyledInput } from "./style.js";
import { StyledBox } from "../../styles/container.js";
import { forwardRef } from "react";
import { PropTypes } from "prop-types";

const Input = forwardRef(
    ({ label, placeholder, type, error, ...rest }, ref) => {
        return (
            <StyledBox>
                <StyledLabel>{label}</StyledLabel>
                <StyledInput
                    type={type}
                    ref={ref}
                    {...rest}
                    error={error ? true : false}
                    placeholder={placeholder}
                />
                {error ? (
                    <StyledParagraph color="var(--color-negative)">
                        {error.message}
                    </StyledParagraph>
                ) : null}
            </StyledBox>
        );
    }
);

Input.propTypes = {
    label: PropTypes.string, 
    placeholder: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  };
Input.displayName = "Input";

export default Input;
