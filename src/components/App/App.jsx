import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import './App.module.css';


export const App =() => {

const [contacts, setContacts] = useState([]);

const [filter, setFilter] = useState('');

 
useEffect (() => {
  const localContacts = localStorage.getItem('contacts');
  if(localContacts) {
    setContacts( JSON.parse(localContacts)) }
  }, []);
useEffect (()=> {
  contacts.length && localStorage.setItem('contacts', JSON.stringify(contacts)) 
}, [contacts])


 const formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

  const contactChecked = contacts.some(
      item =>
        (item.name.toLowerCase() === contact.name.toLowerCase() &&
          item.number === contact.number) || item.number === contact.number);
    
  
  contactChecked ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

const changeFilterInput = e => {
    setFilter(e.target.value);
     };

const  findContacts = () => {
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

 const  deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

  
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilterInput={changeFilterInput} />
        <ContactList
          contacts={findContacts()}
          deleteContact={deleteContact}
        />
      </section>
    );
  };
