
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect } from 'react';
// import { addContact, deleteContact } from 'redux/contacts/contacts-slice'; 
import { fetchContacts, fetchAddContact, fetchDeleteContact } from 'redux/contacts/contact-operation';
import { getFilterContacts } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector'; 
import { setFilter } from '../redux/filter/filter-slice'; 


import Form from './Form/Form';
import Section from './Section/Sextion';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);
  const filteredContacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);

console.log()

  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);

  const handleFormSubmit = ({ name, number }) => {
    const isContactExists = contacts.some(
      (contact) => contact.name === name
    );

    if (isContactExists) {
      console.log('Contact already exists');
      return;
    }

    dispatch(fetchAddContact({ name, number }));
  };

  const handleDeleteContact = (id) => {
    dispatch(fetchDeleteContact (id));
  };

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={handleFormSubmit} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={({ target }) => dispatch(setFilter(target.value))} />
        <Contacts
          contacts={filteredContacts.items}
          onDeleteBtnClick={handleDeleteContact}
        />
      </Section>
    </>
  );
};

export default App;



