import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { textAlign } from '@mui/system';

const appoinmentbg = {
    background: `url(${appoinment})`,
    backgroundColor: "rgba(53, 73, 117 , 0.9)",
    backgroundBlendMode: "darken , luminosity"
}



const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ height: "auto", width: 500, marginTop: -150 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={4} sx={{display: "flex", 
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "left"}}>
                    <Box>
                        <Typography variant="h6" style={{ color: "#1CCEBD" }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make an appointment <br /> today
                        </Typography>
                        <Typography variant="h6" style={{ color: "white", fontSize: 15, fontWeight: 300 ,  margin: "20px 0px" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat earum sit, odit quo nostrum explicabo facilis eveniet eius corrupti! Temporibus?
                        </Typography>
                        <Typography variant="h6">
                            <Button variant="contained" style={{ backgroundColor: "#1CCEBD" }}>Learn more</Button>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;