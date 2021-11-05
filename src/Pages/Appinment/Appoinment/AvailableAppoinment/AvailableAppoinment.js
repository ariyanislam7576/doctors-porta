import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';
import SingleAppoinment from '../SingleAppoinment/SingleAppoinment';

const appoinments = [
    {
        id: 1,
        name: "Teeth orthodontics",
        time: "06.00 PM - 07.00 PM",
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic dentistry",
        time: "07.00 PM - 08.00 PM",
        space: 10
    },
    {
        id: 3,
        name: "Teeth cleaning",
        time: "05.00 PM - 06.00 PM",
        space: 10
    },
    {
        id: 4,
        name: "Cavity protection",
        time: "08.00 PM - 09.00 PM",
        space: 10
    },
    {
        id: 5,
        name: "Teeth orthodontics",
        time: "06.00 PM - 07.00 PM",
        space: 10
    },
    {
        id: 6,
        name: "Teeth orthodontics",
        time: "06.00 PM - 07.00 PM",
        space: 10
    },
]

const AvailableAppoinment = ({date}) => {
    
    return (
        <Container>
            <Typography variant="h4">available appoinment {date.toDateString()} </Typography>
            <Grid container spacing={2} sx={{my:3}}>
                
                    {
                        appoinments.map(appoinment => <SingleAppoinment 
                        key={appoinment.id}
                        appoinhment={appoinment}
                        date={date}
                        ></SingleAppoinment>)
                    }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;