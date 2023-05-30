import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function HostLayout() {
    return (
        <nav className='host--navbar'>
            <NavLink
                to='/host'
                end
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='/host/income'
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Income
            </NavLink>
            <NavLink
                to='/host/hostvans'
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Vans
            </NavLink>
            <NavLink
                to='/host/reviews'
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Reviews
            </NavLink>
            <Outlet />
        </nav>
    )
}

export default HostLayout