import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/navpages/Home';
import Contact from '../pages/navpages/Contact';
import Login from '../pages/auth/Login';
import Navbar from '../components/Navbar';
import ProductList from '../pages/navpages/ProductList';
import ProductDetails from '../pages/product/ProductDetails';
import Cart from '../pages/cart';
import All_ProductList from '../components/All_ProductList';

import Toys  from '../components/Toys';

const MainRoute = () => {
    const isLoggedIn =true;
    return (
        <>
            <Navbar/>
            <Routes>
                <Route element={<Home />} path='/'/>
                <Route element={<ProductList />} path='/product-list/:search' />
                <Route element={<ProductDetails />} path='/product-details/:id' />
                <Route element={<Cart />} path='/cart' />
                <Route element={<All_ProductList />} path='/All_ProductList' />
               <Route element={<Toys/>} path='/Toys'/>
                <Route element={<Login />} path='/login' />
                <Route element={<Contact />} path='/contact' />
                <Route element={<Home />} path='*' />
            </Routes>
        </>
    )
}

export default MainRoute