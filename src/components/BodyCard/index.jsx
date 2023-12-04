import { PropTypes } from "prop-types";
import { StyledBodyCard } from "./style";
import DeleteIcon from "../../assets/delete_icon.png"
import EditIcon from "../../assets/edit_icon.png"
import { useContactContext } from "../../hooks/useContactContext";

export const BodyCard = ({ contact }) => {
    const { openDeleteContactModal, openEditContactModal } = useContactContext()

    BodyCard.propTypes = {
        contact: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            user_id: PropTypes.string
        }),
      };
    return (
        <StyledBodyCard id={contact?.id}>
            <section className="name">
                <h4>{contact?.name}</h4>
            </section>
            <section className="email">
                <h4>{contact?.email}</h4>
            </section>
            <section className="phone">
                <h4>{contact?.phone}</h4>
            </section>
            <section className="actions">
                <button onClick={() => openEditContactModal(contact.id)}><img src={EditIcon} /></button>
                <button onClick={() => openDeleteContactModal(contact.id)}><img src={DeleteIcon} /></button>
            </section>
        </StyledBodyCard>
    );
};
