import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';


const SingleAppoinment = ({appoinhment,date}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { name, time, space } = appoinhment
    return (
        <>
        <Grid item xs={12} md={4} sx={{my: 2}}>
            <Paper elevation={3} />
            <Typography variant="h5">
                {name}
            </Typography>
            <Typography variant="h6" sx={{my:3}}>
                {time}
            </Typography>
            <Typography variant="caption" >
                {space} space available
            </Typography> <br />
            <Button onClick={handleOpen} variant="contained" sx={{mt: 3}}>Book now</Button>
            <Paper />
        </Grid>
        <AppoinmentModal
        handleClose={handleClose}
        open={open}
        appoinments={appoinhment}
        date={date}
        ></AppoinmentModal>
        </>
    );
};

export default SingleAppoinment;