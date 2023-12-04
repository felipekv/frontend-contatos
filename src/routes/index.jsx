import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};
