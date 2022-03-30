import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Field, Text, Input, Button} from './ContactForm.styled';

class ContactForm extends Component { 
    state = {
        name: '', 
        number: ''
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
   
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: ''
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Field>
                    <Text>Name</Text>
                    <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}                    
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </Field>
                <Field>
                    <Text>Number</Text>
                    <Input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}                    
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </Field>
                <Button type="submit">Add contact</Button>
            </Form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;