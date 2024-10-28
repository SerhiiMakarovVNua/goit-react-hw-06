import { useSelector } from 'react-redux';
import { selectContacts } from './redux/contactsSlice';
import { selectNameFilter } from './redux/filtersSlice';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
}

export default App;
