import React from 'react';
import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chair from '../../../images/chair.png'
import Background from '../../../images/bg.png'
import { Button, Typography } from '@mui/material';

const backgroundBanner = {
    background: `url(${Background})`,
    height: 500,
    width: 500
}
const varticleCenter = {
    display: "flex",
    alignItems: "center",
    height: 400,
}

const Bannner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} sx={{textAlign: "start", margin: 5}}>
           <Typography variant="h3">
               Your new smile <br />
               start here
           </Typography>
           <Typography variant="h6" sx={{fontSize: 15, fontWeight: 300,
        
        color: "gray", marginY: 3}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis quasi vitae, suscipit dolore dolor?
           </Typography>
           <Button variant="contained">GET APPOINMENT </Button>
          </Grid>
          <Grid item xs={12} md={6} style={varticleCenter}>
           <img style={{height: 300 , width: "auto"}} src={Chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Bannner;