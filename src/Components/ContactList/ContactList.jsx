import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
    ContactList.propTypes = {
    contacts: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.string.isRequired,
  };

  return (
   <ul className={s.contactList}>
    {contacts.map(({ id, name, contact}, index) => (
      <Contact
      key={index} 
      id={id}
      name={name}
      contact={contact}
      deleteNumber={onDeleteContact}
      />
        ))}
   </ul>

  );
};

export default ContactList;