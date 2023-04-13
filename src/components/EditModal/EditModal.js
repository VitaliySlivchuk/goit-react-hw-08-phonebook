import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editContact } from 'redux/contacts/operations';
import { Modal, Container, Box, Button, TextField } from '@mui/material';
import { SnakBar } from 'components/SnackBar/SnakBar';

export const EditModal = ({
  id,
  isOpenModal,
  setIsOpenModal,
  setOpenModal,
  name,
  number,
}) => {
  const dispatch = useDispatch();
  const [isShowShak, setIsShowShak] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const number = formData.get('number');

    if (number === '' || name === '') {
      return setIsShowShak(true);
    }
    dispatch(
      editContact({
        id,
        name,
        number,
      })
    );
    setOpenModal(false);
  };
  return (
    <Modal
      open={isOpenModal}
      onClose={() => setIsOpenModal(!isOpenModal)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
                Edit Contact
              </Button>
            </Box>
          </Box>
        </Container>
        <SnakBar
          isShowSnak={isShowShak}
          setIsShowSnak={setIsShowShak}
          message={'Fill the name or number field'}
        />
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
