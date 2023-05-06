
import ContactElem from "./ContactElem/ContactElem";
import ContactForm from './ContactForm/ContactForm';
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

const App = () => {

  return (
    <>
      <ContactElem title="Phonebook">
        <ContactForm />
      </ContactElem>
      <ContactElem title="Contacts">      
        <Filter />        
        <ContactList />
      </ContactElem>
    </>
  );
};


export default App;