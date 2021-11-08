import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useHistory, useLocation } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
   const {registerUser,googleSignIn} = useAuth()

    const [loginData,setLoginData] = useState({})
    const handleOnchange = e => {
        const feild = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[feild] = value
        setLoginData(newLoginData)
    }
    
    const handleSubmit = e => {
        alert('submitting')
        registerUser(loginData.email, loginData.password)
        e.preventDefault()

    }



    return (
        <Container sx={{my: 5}}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} >
                    <Typography variant='body1'>
                        Register
                    </Typography>
                <form onSubmit={handleSubmit}>
                        <TextField
                            onChange={handleOnchange}
                            sx={{ width: "75%", m: 1 }}
                            type="text"
                            name='name'
                            label="Your name"
                            variant="standard" />
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
                            onClick={googleSignIn}
                            sx={{ width: "75%", m: 1 }}
                            variant='contained'
                            type='submit'
                        >Submit
                        </Button>
                    </form>
                    <Typography variant='body1'>
                       Already have an accoun?<NavLink to='/login'>Login</NavLink>
                    </Typography>

                    <Button sx={{my: 5}} variant='outlined'>Sign In with Google</Button>
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{width: "100%"}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;