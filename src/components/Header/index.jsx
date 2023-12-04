import { useUserContext } from "../../hooks/useUserContext";
import { StyledHeader } from "./style";
import { PropTypes } from "prop-types";

export const Header = ({ user }) => {
    const { handleLogout } = useUserContext();
    Header.propTypes = {
        user: PropTypes.object 
      };
    return (
        <StyledHeader>
            <h2>{user.email}</h2>
            <button onClick={handleLogout}>Sair</button>
        </StyledHeader>
    );
};
