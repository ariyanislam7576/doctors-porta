import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'



const Login = () => {

    const [loginData,setLoginData] = useState({})
    const handleOnchange = e => {
        const feild = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[feild] = value
        setLoginData(newLoginData)

    }
 
    const handleSubmit = e => {
        alert('submitted')
        e.preventDefault()
    }
    return (
        <Container sx={{my: 5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='body1'>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            onChange={handleOnchange}
                            sx={{ width: "75%", m: 1 }}
                            type="email"
                            name='email'
                            label="Your email"
                            variant="standard" />
                        <TextField
                        onChange={handleOnchange}
                            sx={{ width: "75%", m: 1 }}
                            type="password"
                            name='password'
                            label="Your password"
                            variant="standard" />
                        <Button
                            sx={{ width: "75%", m: 1 }}
                            variant='contained'
                            type='submit'
                        >Submit
                        </Button>
                    </form>
                    <Typography variant='body1'>
                        New to here <NavLink to='/register'>Register</NavLink>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;