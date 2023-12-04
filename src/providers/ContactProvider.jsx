import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { PropTypes } from "prop-types";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const navigate = useNavigate();

    const [deleteContactModalIsOpen, setDeleteContactModalIsOpen] = useState(false);
    const [editContactModalIsOpen, setEditContactModalIsOpen] = useState(false);
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [contactIdToDelete, setContactIdToDelete] = useState("");
    const [contactIdToEdit, setContactIdToEdit] = useState("");
    const [createdContact, setCreatedContact] = useState(false);
    const [editedContact, setEditedContact] = useState(false);
    const [deletedContact, setDeletedContact] = useState(false);

    const token = localStorage.getItem("@Contacts:token");

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    const getUserContacts = async () => {
        const userContacts = await api.get("contacts/");
        return userContacts;
    };

    const openAddModal = () => {
        setAddModalIsOpen(true);
    };

    const openEditContactModal = (id) => {
        setContactIdToEdit(id);
        setEditContactModalIsOpen(true);
    };

    const openDeleteContactModal = (id) => {
        setContactIdToDelete(id);
        setDeleteContactModalIsOpen(true);
    };

    const closeAddModal = () => {
        setAddModalIsOpen(false);
    };

    const closeEditContactModal = () => {
        setEditContactModalIsOpen(false);
    };

    const closeDeleteContactModal = () => {
        setDeleteContactModalIsOpen(false);
    };

    const requestEditContact = async (formData) => {
        try {
            const { data } = await api.patch(
                `/contacts/${contactIdToEdit}`,
                formData
            );

            if (data) {
                toast.success("Contato editado com sucesso!");
                setEditedContact(!editedContact);
                closeEditContactModal();
            }
        } catch (error) {
            toast.error("Ops! algo deu errado");
        }
    };

    const requestCreateContact = async (formData) => {
        try {
            const { data } = await api.post(
                `/contacts`,
                formData
            );

            if (data) {
                toast.success("Contato criado com sucesso!");
                setCreatedContact(!createdContact);
                closeAddModal();
            }
        } catch (error) {
            toast.error("Ops! algo deu errado");
        }
    };

    const requestDeleteContact = async () => {
        try {
            await api.delete(`/contacts/${contactIdToDelete}`);

            toast.success("Contato removido com sucesso!");
            setDeletedContact(!deletedContact);
            closeDeleteContactModal();

        } catch (error) {
            toast.error("Ops! algo deu errado");
        }
    };

    ContactProvider.propTypes = {
        children: PropTypes.ReactNode,
    };

    return (
        <ContactContext.Provider
            value={{
                navigate,
                getUserContacts,
                openAddModal,
                openDeleteContactModal,
                openEditContactModal,
                closeAddModal,
                closeEditContactModal,
                closeDeleteContactModal,
                addModalIsOpen,
                deleteContactModalIsOpen,
                editContactModalIsOpen,
                setAddModalIsOpen,
                setDeleteContactModalIsOpen,
                setEditContactModalIsOpen,
                contacts,
                setContacts,
                contactIdToDelete,
                createdContact,
                setCreatedContact,
                requestEditContact,
                editedContact,
                setContactIdToEdit,
                requestDeleteContact,
                deletedContact,
                requestCreateContact
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};
