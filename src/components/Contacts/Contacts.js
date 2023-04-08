import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/operations';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Loader } from '../Loader/Loader';

import css from '../Form/Form.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      {isLoading && !error && <Loader />}
      <Form />
      <div className={css.contactsWrap}>
        <Filter />
        <ContactList />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contacts;
