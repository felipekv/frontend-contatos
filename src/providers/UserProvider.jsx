import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { PropTypes } from "prop-types";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [createdUser, setCreatedUser] = useState(false);
    const [editedUser, setEditedUser] = useState(false);
    const [deletedUser, setDeletedUser] = useState(false);
    const [editUserModalIsOpen, setEditUserModalIsOpen] = useState(false);
    const [deleteUserModalIsOpen, setDeleteUserModalIsOpen] = useState(false);

    const token = localStorage.getItem("@Contacts:token");
    const userId = localStorage.getItem("@Contacts:user_id");

    if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    const requestLogin = async (formData) => {
        try {
            const { data } = await api.post("/login", formData);
            api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

            const decodedToken = jwtDecode(data.token);

            if (data) {
                localStorage.setItem("@Contacts:token", data?.token);
                localStorage.setItem("@Contacts:user_id", decodedToken.sub);
                toast.success("Login efetuado com sucesso!");
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
    };

    const requestEditUser = async (formData) => {
        try {
            const { data } = await api.patch(
                `/users/${localStorage.getItem("@Contacts:user_id")}`,
                formData
            );

            if (data) {
                toast.success("Conta editada com sucesso!");
                setEditedUser(!editedUser);
                closeEditUserModal()
            }
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
    };

    const requestDeleteUser = async () => {
        try {
            await api.delete(
                `users/${localStorage.getItem("@Contacts:user_id")}`
            );
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        } finally {
            toast.success("Conta deletada com sucesso!");
            localStorage.removeItem("@Contacts:token");
            localStorage.removeItem("@Contacts:user_id");
            setDeletedUser(!deletedUser);
            closeDeleteUserModal()
            navigate("/");
        }
    };

    const getUserData = async () => {
        const userData = await api.get(`users/${userId}`);

        return userData;
    };

    const requestRegister = async (formData) => {
        // eslint-disable-next-line no-unused-vars
        const { confirm, ...newFormData } = formData;

        try {
            const { data } = await api.post("/users", newFormData);

            if (data) {
                toast.success("Conta criada com sucesso!");
                setCreatedUser(!createdUser);
                navigate("/");
            }
        } catch (error) {
            toast.error("Ops! algo deu errado");
        }
    };

    const handleLogout = () => {
        toast.success("Logout efetuado com sucesso!");
        localStorage.removeItem("@Contacts:token");
        localStorage.removeItem("@Contacts:user_id");

        navigate("/");
    };

    const openEditUserModal = () => {
        setEditUserModalIsOpen(true);
    };

    const closeEditUserModal = () => {
        setEditUserModalIsOpen(false);
    };

    const openDeleteUserModal = () => {
        setDeleteUserModalIsOpen(true);
    };

    const closeDeleteUserModal = () => {
        setDeleteUserModalIsOpen(false);
    };

    UserProvider.propTypes = {
        children: PropTypes.ReactNode,
    };

    return (
        <UserContext.Provider
            value={{
                navigate,
                requestLogin,
                requestRegister,
                handleLogout,
                getUserData,
                user,
                setUser,
                createdUser,
                requestDeleteUser,
                requestEditUser,
                deletedUser,
                editedUser,
                openDeleteUserModal,
                closeDeleteUserModal,
                openEditUserModal,
                closeEditUserModal,
                editUserModalIsOpen,
                deleteUserModalIsOpen,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
