
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect } from 'react';

import { fetchContacts, fetchAddContact, fetchDeleteContact } from 'redux/contacts/contact-operation';
import { getFilterContacts } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector'; 
import { setFilter } from '../redux/filter/filter-slice'; 


import Form from './Form/Form';
import Section from './Section/Seсtion';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);
  const filteredContacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);


useEffect(() => {
  try {
    dispatch(fetchContacts());
  } catch (error) {
    console.log(error.message);
  }
}, [dispatch]);

const handleFormSubmit = ({ name, number }) => {
  const isContactExists = contacts.some((contact) => contact.name === name);

  if (isContactExists) {
    console.log('Contact already exists');
    return;
  }

  try {
    dispatch(fetchAddContact({ name, number }));
    toast.success('Contact added successfully');
  } catch (error) {
    console.log(error.message);
    toast.error('Error adding contact');
  }
};

const handleDeleteContact = (id) => {
  try {
    dispatch(fetchDeleteContact(id));
    toast.success('Contact deleted successfully');
  } catch (error) {
    console.log(error.message);
    toast.error('Error deleting contact');
  }
};

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={handleFormSubmit} />
      </Section>
      <Section title="Contacts">
    
        <Filter value={filter}  onChange={({ target }) => dispatch(setFilter(target.value))} />
       
        {contacts.length ? (
  <Contacts
    contacts={filteredContacts}
    onDeleteBtnClick={handleDeleteContact}
  />
) : (
  <p>No contacts yet</p>
)}   
      </Section>
    </>
  );
};

export default App;



