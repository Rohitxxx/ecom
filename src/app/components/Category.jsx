import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Category = ({ title, img, id }) => {
    return (
        <Stack alignItems={'center'} p={1}>
            <Image src={img} width={'70px'} />
            <Link to={'/product-items/' + id}>{title}</Link>
        </Stack>
    )
}

export default Category