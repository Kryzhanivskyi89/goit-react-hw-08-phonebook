import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import {addContact} from './../../redux/operations';
import {selectContacts } from '../../redux/selectors';
import style from './ContactForm.module.css';

const ContactForm = () => {    

  const dispatch = useDispatch();
  const [localState, setLocalState] = useState({ name: '', number: '' });

  const handleChange = e => {
        const { name, value } = e.target;
        setLocalState(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, number } = localState;
  const contacts = useSelector(selectContacts);

  const checkContact = contacts.some(contact => {
    return (
      contact.name.toLowerCase() === localState.name.toLowerCase() ||
      contact.number === localState.number
    );
  });

  const handleSubmit = e => {
    e.preventDefault();

    checkContact
      ? (Notiflix.Notify.warning('This contact already exists'))
      : dispatch(addContact(localState))
    
      && setLocalState(() => ({ name: '', number: '' }));
      // e.target.reset();
  };
   
return (
    <form onSubmit={handleSubmit}>
        <label className={style.title}> Name
            <input className={style.input}                
                type="text"
                name="name"
                value={name}
                id="contactName"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChange}
                required
            />
        </label>
        <label  className={style.title}>Number
            <input className={style.input}                
                type="tel"
                id="contactNumber"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
                required
            />
        </label>
        <button className={style.button} type="submit">
            Add contact
        </button>
    </form>
  );
};

export default ContactForm;