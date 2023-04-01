import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
//components
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
//selectors
import { selectIsLoading, selectError } from 'redux/selectors';
//styles
import css from './Form/Form.module.css';
import 'react-toastify/dist/ReactToastify.css';

import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log('ololo');
  return (
    <div className={css.app}>
      {isLoading && !error && <Loader />}
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
