import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Container, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { SnakBar } from 'components/SnackBar/SnakBar';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [isOpen, setIsOpen] = useState(false);
  const [sneackText, setSneakText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const number = data.get('number');

    const findSameName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (findSameName) {
      e.target.reset();
      setSneakText('This contact is on the phonebook');
      setIsOpen(true);
      return;
    }
    if (name.trim() === '' || number.trim() === '') {
      setSneakText('Fill contact name or contact number field');
      setIsOpen(true);
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );
    e.target.reset();
  };
  return (
    <Container component="main" maxWidth="xs">
      <SnakBar
        isShowSnak={isOpen}
        setIsShowSnak={setIsOpen}
        message={sneackText}
      />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Contact name"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="number"
            label="Contact number"
            id="number"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
