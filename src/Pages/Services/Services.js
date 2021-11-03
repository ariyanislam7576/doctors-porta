import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service/Service';

import floride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'

const services = [
    {
        name: "Floride treatment",
        des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic quae accusamus provident veniam odio harum id fugiat tempore, ducimus, aliquam pariatur dicta suscipit saepe?",
        img: floride
    },
    {
        name: "cavity treatment",
        des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic quae accusamus provident veniam odio harum id fugiat tempore, ducimus, aliquam pariatur dicta suscipit saepe?",
        img: cavity
    },
    {
        name: "whitening treatment",
        des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic quae accusamus provident veniam odio harum id fugiat tempore, ducimus, aliquam pariatur dicta suscipit saepe?",
        img: whitening
    },
]

const Services = () => {
    return (
        <Box>
            <Container sx={{ flexGrow: 1 }}>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   <h5>Our Services</h5>
                   <h2>Services We provide </h2>
                </Typography>
                <Grid container spacing={{ xs: 2, mx: "auto" }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;