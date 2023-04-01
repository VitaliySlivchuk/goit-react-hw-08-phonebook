import ContactsItem from 'components/ContactsItem';

import { useSelector } from 'react-redux';
//selectors
import { selectFilteredContacts } from 'redux/selectors';
//styles
import css from '../Form/Form.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ul}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactsItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
