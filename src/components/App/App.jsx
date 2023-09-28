import { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Fillter';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(getItems());
  const [filter, setFilter] = useState('');

  function getItems() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const items = JSON.parse(savedContacts);
      return items;
    }
    return [];
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handleChange={handleChangeFilter} />
      <ContactList contacts={visibleItems} onDelete={handleDelete} />
    </Container>
  );
};
