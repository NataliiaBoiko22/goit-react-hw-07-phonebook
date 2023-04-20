import css from './app.module.css';
import ContactForm from '../ContsctForm/ContactForm';
import ContactList from '../ContactList/ContactList'
function App() {
   
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default App;

