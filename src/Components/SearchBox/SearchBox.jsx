import PropTypes from "prop-types";
import s from "./SearchBox.module.css";
import { useId } from 'react';

const SearchBox = ({ value, onFindName }) => {
    const searchFeildId = useId();
    
    SearchBox.propTypes = {
        value: PropTypes.string.isRequired,
        onFindName: PropTypes.func.isRequired,
    }

    return (
        <div className={s.searchContainer}>
        <label htmlFor={searchFeildId}> Find contacts by name</label>
        <input className={s.searchFeild} type="text" value={value} id={searchFeildId} onChange={(e) => onFindName(e.target.value)}
        ></input>
        </div>
    );
};

export default SearchBox;
