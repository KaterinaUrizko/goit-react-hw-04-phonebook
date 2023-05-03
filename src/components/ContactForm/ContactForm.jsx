import { useState } from "react";

import PropTypes from 'prop-types';
import './ContactForm.module.css';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const  handleChange = event => {
        const {name, value} = event.target;
        switch (name) {
          case 'name': setName (value);
          break;
          case 'number': setNumber (value);
          break;
          default:
          break;
        }
       
    };

const   handleSubmit = event => {
        event.preventDefault();
        onSubmit(name,number);
        setName('');
        setNumber('');
    };

 return (
          <form onSubmit={handleSubmit}>
           <label> Name
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label> Phone number
              <input
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                placeholder="Phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
    
            <button type="submit">Add contact</button>
          </form>
        );
      }
    
    ContactForm.prototypes = {
         onSubmit: PropTypes.func.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.number.isRequired
    };


