import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../../images/chair.png'
import Calender from '../../../Shared/Calender/Calender';

const AppoinmentHeader = ({date,setDate}) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid  sx={{my: 10}} item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%", margin: "80px 0px" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;