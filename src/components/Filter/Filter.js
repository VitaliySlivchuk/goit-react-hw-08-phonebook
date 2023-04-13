import { useDispatch } from 'react-redux';
import { findContact } from 'redux/contacts/filterSlice';
import { Container, Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(findContact(value));
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Box component="form" onChange={handleChange} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="filter"
            label="Filter contacts"
            name="filter"
            autoFocus
          />
        </Box>
      </Box>
    </Container>
  );
};
