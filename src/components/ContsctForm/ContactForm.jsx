import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from 'redux/contactsApi';
import { nanoid } from 'nanoid';
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setPhone(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase()))
     { alert(`${name} is already in contacts`);
     setName('');
     setPhone('');
    return;
  }
    dispatch(addContact({name, phone, id:nanoid()}))
    setName('');
    setPhone('');
  }
return (
<form className={css.container} onSubmit={handleSubmit}>
<label className={css.item}>
Name *
<input
       type="text"
       className={css.input}
       name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       value={name}
       onChange={handleNameChange}
       required
     />
</label>
<label className={css.item}>
Number *
<input
       type="tel"
       name="number"
       className={css.input}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       value={phone}
       onChange={handleNumberChange}
       required
     />
</label>
<button className={css.button} type="submit">Add contact</button>
</form>
);
};

ContactForm.propTypes = {
  contacts: PropTypes.object,
};

export default ContactForm;