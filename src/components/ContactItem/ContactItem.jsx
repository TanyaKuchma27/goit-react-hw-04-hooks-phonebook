import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <div>
            {name}:  {number}
            <button
                type="button"
                onClick={onDeleteContact}
                className={s.btn}
            >
            Delete
            </button>
        </div>);
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,        
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

