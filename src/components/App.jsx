import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import css from './Form/Form.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <h1>Phone book</h1>
      <Form />
      <h2>Contacts</h2>
      <div className={css.contactsWrap}>
        <Filter />
        <ContactList />
      </div>
      <ToastContainer />
    </div>
  );
};
