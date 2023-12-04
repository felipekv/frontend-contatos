import Dialog from "@mui/material/Dialog";
import { StyledH2 } from "../../styles/typography";
import CloseIcon from "@mui/icons-material/Close";
import { useUserContext } from "../../hooks/useUserContext";
import { makeStyles } from "@mui/styles";
import { StyledForm } from "../../styles/form";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditUserSchema } from "./validator";

const useStyles = makeStyles({
    Container: {
        backgroundColor: "var(--color-grey-3)",
        width: "400px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    DialogStyle: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
    },
    BoxStyle: {
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1rem",
        paddingTop: "3rem",
    },
    CloseButton: {
        padding: "0.25rem",
        width: "30px",
        height: "30px",
        borderRadius: "0.5rem",
    },
    FormStyle: {
        backgroundColor: "var(--color-grey-3)",
        paddingTop: "0",
        marginTop: "0 !important"
    },
});

export const EditUserModal = () => {
    const classes = useStyles();

    const { editUserModalIsOpen, closeEditUserModal, requestEditUser } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(EditUserSchema),
    });

    const submit = async (formData) => {
        await requestEditUser(formData);
        reset();
    };
    return (
        <Dialog
            open={editUserModalIsOpen}
            onClose={closeEditUserModal}
            className={classes.DialogStyle}
        >
            <div className={classes.Container}>
                <div className={classes.BoxStyle}>
                    <StyledH2>Preencha os dados do contato</StyledH2>
                    <button
                        onClick={closeEditUserModal}
                        className={classes.CloseButton}
                    >
                        <CloseIcon alt="Icone da letra X, referente à fechar" />
                    </button>
                </div>
                <StyledForm
                    className={classes.FormStyle}
                    onSubmit={handleSubmit(submit)}
                    noValidate
                >
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Digite o nome"
                        {...register("name")}
                        error={errors.name}
                    />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Digite o email"
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        {...register("password")}
                        placeholder="Digite a senha"
                        error={errors.password}
                    />
                    <Input
                        label="Telefone"
                        type="text"
                        {...register("phone")}
                        placeholder="Digite o telefone"
                        error={errors.phone}
                    />
                    <button>Editar</button>
                </StyledForm>
            </div>
        </Dialog>
    );
};
