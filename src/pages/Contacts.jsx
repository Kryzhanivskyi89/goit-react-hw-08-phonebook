import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </HelmetProvider>
  );
}