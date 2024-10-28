import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteClick = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ul className={styles.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteClick={deleteClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
