import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;