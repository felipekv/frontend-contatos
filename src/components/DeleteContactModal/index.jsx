import Dialog from "@mui/material/Dialog";
import { StyledH2 } from "../../styles/typography";
import CloseIcon from "@mui/icons-material/Close";
import { useContactContext } from "../../hooks/useContactContext";
import { makeStyles } from "@mui/styles";

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
        padding: "1rem"
    },
    BoxStyle: {
        width: "100%",
        maxWidth: "400px",
        height: "300px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1rem",
        paddingTop: "3rem"
    },
    CloseButton: {
        padding: "0.25rem",
        width: "30px",
        height: "30px",
        borderRadius: "0.5rem"
    },
    DeleteButton: {
        alignSelf: "center",
        padding: "0.5rem",
        marginBottom: "2rem",
        borderRadius: "0.3rem",
        fontFamily: "sans-serif",
        fontWeight: "600",
        backgroundColor: "var(--color-primary)",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "var(--color-primary-focus)"
        }
    }
})

export const DeleteContactModal = () => {
    const classes = useStyles();
    const { deleteContactModalIsOpen, closeDeleteContactModal, requestDeleteContact } = useContactContext();
    return (
        <Dialog
            open={deleteContactModalIsOpen}
            onClose={closeDeleteContactModal}
            className={classes.DialogStyle}
            
        >
            <div className={classes.Container}>
                <div className={classes.BoxStyle}>
                    <StyledH2>Deseja realmente remover o contato?</StyledH2>
                    <button onClick={closeDeleteContactModal} className={classes.CloseButton}>
                        <CloseIcon  
                            alt="Icone da letra X, referente à fechar"
                        />
                    </button>
                </div>
                <button className={classes.DeleteButton} onClick={() => requestDeleteContact()}>Remover</button>
            </div>
        </Dialog>
    );
};
