import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const Testomunial = ({ user }) => {
    const { name, img, des, add } = user
    return (
        <div>
             <Grid item xs={12} md={3}>
          <Typography variant='caption'>
              {des}
          </Typography>
        </Grid>
        </div>
    );
};

export default Testomunial;