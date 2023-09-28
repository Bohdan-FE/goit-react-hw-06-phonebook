import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
