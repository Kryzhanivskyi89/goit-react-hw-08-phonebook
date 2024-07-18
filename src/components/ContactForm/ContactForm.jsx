import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import style from './ContactForm.module.css';

const ContactForm = () => {    
  const dispatch = useDispatch();
  const [localState, setLocalState] = useState({ name: '', phone: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setLocalState(prevState => ({ ...prevState, [name]: value }));
  };

  const { name, phone } = localState;
  const contacts = useSelector(selectContacts);

  const checkContact = contacts.some(contact => {
    return (
      contact.name.toLowerCase() === localState.name.toLowerCase() ||
      contact.phone === localState.phone
    );
  });

  const handleSubmit = async e => {
  e.preventDefault();

  if (checkContact) {
    Notiflix.Notify.warning('This contact already exists');
    return;
  }

  try {
    const result = await dispatch(addContact(localState)).unwrap();
    console.log('Contact added successfully:', result);
    setLocalState({ name: '', phone: '' });
  } catch (error) {
    console.error('Failed to add contact:', error);
    Notiflix.Notify.failure('Failed to add contact');
  }
};
   
  return (
    <form className={style.contact__form} onSubmit={handleSubmit}>
      <label className={style.label}> Name
        <input className={style.input}                
          type="text"
          name="name"
          value={name}
          id="contactName"
          onChange={handleChange}
          required
        />
      </label>
      <label className={style.label}>Number
        <input className={style.input}                
          type="tel"
          id="contactNumber"
          name="phone"
          value={phone}
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
