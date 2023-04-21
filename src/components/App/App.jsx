import css from './app.module.css';
import ContactForm from '../ContsctForm/ContactForm';
import ContactList from '../ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contactsApi';
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <ContactList />
      {isLoading && !error && <Loader />}
    </div>
  );
}

export default App;

