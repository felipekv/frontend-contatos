
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const  user_id = localStorage.getItem("@Contacts:user_id");
  const token = localStorage.getItem("@Contacts:token")

  return user_id && token ? <Outlet /> : <Navigate to="/login" />;
};