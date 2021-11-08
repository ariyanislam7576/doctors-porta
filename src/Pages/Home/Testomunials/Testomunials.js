import React from 'react';
import { Container, Typography, Grid, Item } from '@mui/material';
import Testomunial from './Testomunial/Testomunial';
import { Box } from '@mui/system';

const users = [
    {
        id: 1,
        name: "Sultana kamal",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente quia unde a repudiandae, minus dolore. Dolore earum, quis nostrum ullam quisquam quidem consequatur quo doloribus, unde similique dolorum placeat.",
        add: "California",
        img: "https://media.istockphoto.com/photos/smiling-beautiful-mid-adult-japanese-woman-looking-at-the-camera-picture-id1317870344?k=20&m=1317870344&s=612x612&w=0&h=-tuILp6ZN-4-yVBJ5kXsZDPZ9myiE7kgP4fba7yCgOE="
    },
    {
        id: 2,
        name: "Kobir Chowdhory",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente quia unde a repudiandae, minus dolore. Dolore earum, quis nostrum ullam quisquam quidem consequatur quo doloribus, unde similique dolorum placeat.",
        add: "Washington DC",
        img: "https://images.unsplash.com/photo-1590834769514-19405b9d7fd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=608&q=80"
    },
    {
        id: 3,
        name: "Jahangir alom",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente quia unde a repudiandae, minus dolore. Dolore earum, quis nostrum ullam quisquam quidem consequatur quo doloribus, unde similique dolorum placeat.",
        add: "Torento",
        img: "https://images.unsplash.com/photo-1623041336882-68d8d0b18fab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=565&q=80"
    },
]

const Testomunials = () => {
    return (
        <Container>
            <Box>
            <Grid container spacing={2}>
               {
                   users.map(user => <Testomunial
                   key={user.id}
                   user={user}></Testomunial>)
               }
            </Grid>
            </Box>
        </Container>
    );
};

export default Testomunials;