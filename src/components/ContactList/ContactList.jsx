import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
    return (
        <ul className={s.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDeleteContact={() => onDeleteContact(id)}
                    />                    
                </li>
            ))}
        </ul>);
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,            
        }))    
};

export default ContactList;

