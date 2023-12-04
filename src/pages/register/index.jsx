import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { StyledForm } from "../../styles/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./validator";
import { StyledContainer } from "../../styles/container";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";

export const Register = () => {
    const { requestRegister, navigate } = useUserContext();

    useEffect(() => {
        if (
            localStorage.getItem("@Contacts:token") &&
            localStorage.getItem("@Contacts:user_id")
        ) {
            navigate("/dashboard");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(RegisterSchema),
    });

    const submit = async (formData) => {
        await requestRegister(formData);
        reset();
    };

    return (
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit(submit)} noValidate>
                <h2>Crie sua conta</h2>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                    error={errors.name}
                />
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
                <Input
                    label="Confirmar Senha"
                    type="password"
                    {...register("confirm")}
                    placeholder="Digite novamente sua senha"
                    error={errors.confirm}
                />
                <Input
                    label="Telefone"
                    type="text"
                    {...register("phone")}
                    placeholder="Digite seu telefone"
                    error={errors.phone}
                />
                <button>Registrar</button>
                <Link to="/">Voltar</Link>
            </StyledForm>
        </StyledContainer>
    );
};
