import { HiUser } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, deleteNumber }) => {
    return (
        <li className={s.list} key={id}>
        <div>
         <div className={s.info}>
         < HiUser /><p>{name}</p>
         </div>
         <div className={s.info}>
         < FaPhoneAlt /><p>{number}</p>
         </div>
         </div>
         <button type="button" className={s.button} onClick={() => deleteNumber(id)} >
          Delete
         </button>
        
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    number: PropTypes.func.isRequired, 
    deleteNumber: PropTypes.func.isRequired,   
};

export default Contact;