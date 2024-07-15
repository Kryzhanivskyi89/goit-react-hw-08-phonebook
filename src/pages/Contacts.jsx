import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  HelmetProvider } from 'react-helmet-async';

import { fetchContacts } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from './../components/Loader/Loader';
import ContactElem from 'components/ContactElem/ContactElem';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (    
    <>
      <HelmetProvider>
        
        <ContactElem title="Phonebook">
          <ContactForm />
        </ContactElem>
      
        <ContactElem title="Contacts">      
          <Filter />  
          <div>{isLoading && <Loader />}</div>
          <ContactList />
        </ContactElem>
          
      </HelmetProvider>
    </>
  );
}