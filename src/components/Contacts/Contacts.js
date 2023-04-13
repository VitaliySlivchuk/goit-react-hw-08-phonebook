import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, Container } from '@mui/material';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Loader } from '../Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <Form />
      <Container sx={{ width: 500 }}>
        <Filter />
        <ContactList />
      </Container>
    </Container>
  );
}
