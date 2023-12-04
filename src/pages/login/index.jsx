import { useForm } from "react-hook-form";
import { LoginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledContainer } from "../../styles/container";
import { StyledForm } from "../../styles/form";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext.jsx";

export const Login = () => {
    const { requestLogin, navigate } = useUserContext();

    useEffect(() => {
        if (
            localStorage.getItem("@Contacts:token") &&
            localStorage.getItem("@Contacts:user_id")
        ) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(LoginSchema),
    });

    const submit = async (formData) => {
        await requestLogin(formData);
        reset();
    };

    return (
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit(submit)} noValidate>
                <h2>Login</h2>
                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                    error={errors.email}
                />
                <Input
                    label="Senha"
                    type="password"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                    error={errors.password}
                />
                <button type="submit">Login</button>
                <p className="betweenButtonsParagraph">
                    Ainda não possui uma conta?
                </p>
                <Link to="/register">Cadastrar</Link>
            </StyledForm>
        </StyledContainer>
    );
};
