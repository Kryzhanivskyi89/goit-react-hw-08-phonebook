import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  HelmetProvider } from 'react-helmet-async';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Loader from './../../components/Loader/Loader';
import ContactElem from 'components/ContactElem/ContactElem';
import styles from './Contacts.module.css';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (   
      <HelmetProvider>
        <main className={styles.main}>
          <ContactElem title="Phonebook">
            <ContactForm />
          </ContactElem>
        
          <ContactElem title="Contacts">      
            <Filter />  
            <div>{isLoading && <Loader />}</div>
            <ContactList />
          </ContactElem>
        </main>
      </HelmetProvider>
  );
}