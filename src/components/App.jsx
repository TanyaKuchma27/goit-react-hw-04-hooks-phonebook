import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import initialContacts from '../contacts.json';
import { Container } from './App.styled';
import useLocalStorage from '../hooks/useLocalStorage';

export default function App() { 
  const [contacts, setContacts] = useLocalStorage("contacts", initialContacts);
  const [filter, setFilter] = useState('');
 
  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };
    
    const normalizedName = name.toLowerCase();

    if (contacts.find(contact =>
      contact.name.toLowerCase() === normalizedName
      )) {
      alert(`${name} is already in contacts`);
      return;
    };
    
    setContacts([contact, ...contacts]);
  }; 

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}/>
        
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList visibleContacts={ visibleContacts } onDeleteContact={deleteContact}/>         
    </Container>
  );
}

// import React, { Component } from 'react';
// class App extends Component { 
//   state = {
//     contacts: initialContacts,
//     filter: ''    
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {      
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }    
//   };

//   addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number
//     };

//     const normalizedName = name.toLowerCase();

//     if (this.state.contacts.find(contact =>
//       contact.name.toLowerCase() === normalizedName
//     )) {
//       alert(`${name} is already in contacts`);
//       return;
//     };
    
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   }; 

//   formSubmitHandler = ({ name, number }) => {
//     this.addContact(name, number);
//   };
    
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//    deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler}/>
        
//         <h2>Contacts</h2>
//         <Filter filter={this.state.filter} onChange={this.changeFilter} />
//         <ContactList visibleContacts={ visibleContacts } onDeleteContact={this.deleteContact}/>         
//       </Container>
//     );
//   }
// }

// export default App;