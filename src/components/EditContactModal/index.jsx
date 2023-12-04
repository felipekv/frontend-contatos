import Dialog from "@mui/material/Dialog";
import { StyledH2 } from "../../styles/typography";
import CloseIcon from "@mui/icons-material/Close";
import { useContactContext } from "../../hooks/useContactContext";
import { makeStyles } from "@mui/styles";
import { StyledForm } from "../../styles/form";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditContactSchema } from "./validator";

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

export const EditContactModal = () => {
    const classes = useStyles();

    const { editContactModalIsOpen, closeEditContactModal, requestEditContact } = useContactContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(EditContactSchema),
    });

    const submit = async (formData) => {
        await requestEditContact(formData);
        reset();
    };
    return (
        <Dialog
            open={editContactModalIsOpen}
            onClose={closeEditContactModal}
            className={classes.DialogStyle}
        >
            <div className={classes.Container}>
                <div className={classes.BoxStyle}>
                    <StyledH2>Preencha os dados do contato</StyledH2>
                    <button
                        onClick={closeEditContactModal}
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
