import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import Categories from '../../components/Categories'
import Banner from '../../components/Banner'
import PopularProduct from '../../components/PopularProduct'

const Home = () => {
    return (
        <Box>
            <Categories />
            <Banner />
            <PopularProduct />
        </Box>
    )
}

export default Home