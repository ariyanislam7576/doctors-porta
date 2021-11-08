import { CardMedia, Container , Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Service = (props) => {
    const { name, img, des } = props.service
    return (
        <div>
            <Grid item xs={2} sm={4} md={4} sx={{m: 1, boxShadow: 0
                }}>
                <Card sx={{ minWidth: 275, my: 5 , boxShadow: 0}}>
                    <CardMedia
                        component="img"
                        style={{height: "auto" , width: "auto" , margin: "0px auto"}}
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {des.slice(0,35)}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default Service;