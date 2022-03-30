import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import {List, Item} from './ContactList.styled';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <ContactItem
                        name={name}
                        number={number}
                        onDeleteContact={() => onDeleteContact(id)}
                    />                    
                </Item>
            ))}
        </List>);
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,            
        }))    
};

export default ContactList;

