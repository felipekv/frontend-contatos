import { Link } from "react-router-dom";
import { StyledContainer } from "../../styles/container";
import { HomeMain } from "./style";
import ContactIcon from "../../assets/contact-icon.png";
import { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";

export const Home = () => {
    const { navigate } = useUserContext();

    useEffect(() => {
        if (
            localStorage.getItem("@Contacts:token") &&
            localStorage.getItem("@Contacts:user_id")
        ) {
            navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <StyledContainer>
            <HomeMain>
                <div>
                    <h1>Gerenciamento de Contatos</h1>
                    <img src={ContactIcon} />
                </div>
                <div>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Registre-se</Link>
                </div>
            </HomeMain>
        </StyledContainer>
    );
};
