import { Snackbar, Stack, Alert } from '@mui/material';

export const SnakBar = ({ isShowSnak, setIsShowSnak, message }) => {
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsShowSnak(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={isShowSnak}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
