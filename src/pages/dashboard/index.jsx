import { useEffect } from "react";
import { Header } from "../../components/Header";
import { StyledContainer } from "../../styles/container";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { HeadCard } from "../../components/HeadCard";
import { BodyCard } from "../../components/BodyCard";
import { StyledList } from "./style";
import { useContactContext } from "../../hooks/useContactContext";
import { DeleteContactModal } from "../../components/DeleteContactModal";
import { EditContactModal } from "../../components/EditContactModal";
import { CreateContactModal } from "../../components/CreateContactModal";
import { makeStyles } from "@mui/styles";
import { useUserContext } from "../../hooks/useUserContext";
import { EditUserModal } from "../../components/EditUserModal";
import { DeleteUserModal } from "../../components/DeleteUserModal";

const useStyles = makeStyles({
    Container: {
        backgroundColor: "var(--color-grey-3)",
        width: "100%",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: "0.5rem",
        alignItems: "center",
    },
    ButtonStyle: {
        backgroundColor: "var(--color-primary)",
        padding: "0.5rem",
        fontFamily: "sans-serif",
        fontSize: "1rem",
        fontWeight: "600",
        color: "white",
        borderRadius: "0.25rem",
        height: "2.125rem",
        "&:hover": {
            backgroundColor: "var(--color-primary-focus)",
        },
    },
});

export const Dashboard = () => {
    const classes = useStyles();

    const {
        getUserContacts,
        setContacts,
        contacts,
        editedContact,
        openAddModal,
        createdContact,
        deletedContact,
    } = useContactContext();

    const { user, setUser, getUserData, editedUser, openEditUserModal, openDeleteUserModal } = useUserContext()

    const token = localStorage.getItem("@Contacts:token");
    const userId = localStorage.getItem("@Contacts:user_id");

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    useEffect(() => {
        try {
            getUserData()
                .then((res) => {
                    setUser(res.data);
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editedUser]);

    useEffect(() => {
        try {
            getUserContacts()
                .then((res) => {
                    const filteredContacts = res.data.filter(
                        (contact) => contact.user_id === userId
                    );
                    setContacts(filteredContacts);
                })
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editedContact, createdContact, deletedContact]);
    return (
        <StyledContainer>
            <Header user={user} />
            <DeleteContactModal />
            <EditContactModal />
            <CreateContactModal />
            <EditUserModal />
            <DeleteUserModal />
            <nav className={classes.Container}>
                <button
                    className={classes.ButtonStyle}
                    onClick={() => openAddModal()}
                >
                    Criar contato
                </button>
                <button className={classes.ButtonStyle} onClick={() => openEditUserModal()}>Editar conta</button>
                <button className={classes.ButtonStyle} onClick={() => openDeleteUserModal()}>Excluir conta</button>
            </nav>
            <StyledList>
                <HeadCard />
                {contacts &&
                    contacts.map((contact) => (
                        <BodyCard key={contact.id} contact={contact} />
                    ))}
            </StyledList>
        </StyledContainer>
    );
};
