import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/contacts/selectors';

import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import  Loader  from './../Loader/Loader'
import style from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteringContacts = contacts => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };
    
    return (
        <ul className={style.list}>
            {isLoading && !error && <Loader />}
            {!isLoading && !error &&
                filteringContacts(contacts).map(({ _id, name, phone }) => (
                    <li className={style.item} key={phone}>
                        <p>
                            {name}: {phone}
                        </p>
                        <button className={style.button} type="button" onClick={() => dispatch(deleteContact(_id))} >Delete contact</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default ContactList