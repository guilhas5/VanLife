import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function HostLayout() {
    return (
        <nav className='host--navbar'>
            <Link to='/host'>Dashboard</Link>
            <Link to='/host/income'>Income</Link>
            <Link to='/host/reviews'>Reviews</Link>
            <Outlet />
        </nav>
    )
}

export default HostLayout