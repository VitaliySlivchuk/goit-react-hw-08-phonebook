import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { IconButton, Box, Typography, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { deleteContact } from 'redux/contacts/operations';
import { EditModal } from 'components/EditModal/EditModal';

const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const [isOpenNumber, setIsOpenNumber] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
    >
      <Box>
        <IconButton
          title="number"
          onClick={() => setIsOpenNumber(!isOpenNumber)}
        >
          <LocalPhoneIcon />
        </IconButton>
        {isOpenNumber && <Typography>{number}</Typography>}
      </Box>
      <Typography>{name}</Typography>

      <Box>
        <IconButton title="edit" onClick={() => setOpenModal(!openModal)}>
          <EditIcon />
        </IconButton>
        <IconButton title="delete" onClick={() => dispatch(deleteContact(id))}>
          <DeleteIcon />
        </IconButton>
      </Box>

      <EditModal
        id={id}
        isOpenModal={openModal}
        setIsOpenModal={setOpenModal}
        setOpenModal={setOpenModal}
        name={name}
        number={number}
      />
    </Container>
  );
};

export default ContactsItem;
