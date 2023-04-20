import React from 'react';
import css from './contactList.module.css';
import {useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsApi.js';
import { useSelector } from 'react-redux';
import Filter from 'components/Filter/Filter';


function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
    <Filter />
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
      <p>
      {contact.name} : {contact.phone}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
      ))}
    </ul>
    </div>
  );
}

export default ContactList;
