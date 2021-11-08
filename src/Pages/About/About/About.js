import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import picture from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{mb: 20}}>
                <Grid item xs={12} md={6}>
                    <img style={{width: "60%"}} src={picture} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{textAlign: "left", ml: -10}}>
                    <Typography variant="h4">
                        Exceptional Dental <br /> Care ,on Your Terms
                    </Typography>
                   <Typography variant="subtitle1" sx={{my: 5 , color: "gray"
                }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsa odio maxime repellendus iste esse perferendis, accusamus, obcaecati nisi quasi reiciendis nam! At aliquam accusamus ipsum maxime quos deleniti accusantium.
                   </Typography>
                   <Button variant="contained">Learn more</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;