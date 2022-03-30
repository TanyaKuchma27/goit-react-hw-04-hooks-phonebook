import PropTypes from 'prop-types';
import {Field, Text, Input} from './Filter.styled';

const Filter = ({ filter, onChange }) => {
    return (
        <Field>
            <Text>Find contacts by name</Text>
            <Input
                type="text"                
                value={filter}
                onChange={onChange}
            />
        </Field>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;