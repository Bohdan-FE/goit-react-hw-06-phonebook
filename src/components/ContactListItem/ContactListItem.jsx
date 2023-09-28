import { useDispatch } from 'react-redux';
import { Item } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { removeContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <p>
        {contact.name}:<span>{contact.number}</span>
      </p>
      <button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </button>
    </Item>
  );
};

ContactListItem.protoTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
