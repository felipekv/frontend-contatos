import { useContext } from "react";
import { ContactContext } from "../providers/ContactProvider";

export const useContactContext = () => {
    const contactContext = useContext(ContactContext)
    return contactContext;
  };