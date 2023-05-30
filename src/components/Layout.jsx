import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
    return (
        <div className='content--wrapper'>
            <main>
                <Navbar />
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default Layout