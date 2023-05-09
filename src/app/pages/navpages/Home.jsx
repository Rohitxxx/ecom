import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import Categories from '../../components/Categories'
import Banner from '../../components/Banner'

const Home = () => {
    return (
        <Box>
            <Categories />
            <Banner />
        </Box>
    )
}

export default Home