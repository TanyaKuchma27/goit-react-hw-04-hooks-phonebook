import PropTypes from 'prop-types';
import {Button} from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <div>
            {name}:  {number}
            <Button
                type="button"
                onClick={onDeleteContact}                
            >
            Delete
            </Button>
        </div>);
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,        
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

