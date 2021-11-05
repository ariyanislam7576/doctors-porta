import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';

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


const AppoinmentModal = ({ open, handleClose, appoinments,date }) => {
  const { name, time } = appoinments
  const handleSubmit = e => {
    alert("submitted")
    e.preventDefault()
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              disabled
              sx={{ my: 2, width: "75%" }}
              id="outlined-basic" label="Date"
              variant="outlined"
              defaultValue={time}
            />
            <TextField sx={{ mb: 2, width: "75%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              defaultValue=''
            />
            <TextField
              sx={{ mb: 2, width: "75%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{ mb: 2, width: "75%" }}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
            <TextField
            disabled
              sx={{ mb: 2, width: "75%" }}
              id="outlined-basic"
              label="Date"
              variant="outlined"
              defaultValue={date}
            /> <br />
            <Button sx={{ mb: 5, width: "75%" }}
              variant="contained"
              type="submit">Submit</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppoinmentModal;