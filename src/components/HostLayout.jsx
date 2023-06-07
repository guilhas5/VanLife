import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function HostLayout() {
    return (
        <nav className='host--navbar'>
            <NavLink
                to='.'
                end
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='income'
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Income
            </NavLink>
            <NavLink
                to='vans'
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Van
            </NavLink>
            <NavLink
                to='reviews'
                className={({ isActive }) => isActive ? "link--selected" : ""}
            >
                Reviews
            </NavLink>
            <Outlet />
        </nav>
    )
}

export default HostLayout