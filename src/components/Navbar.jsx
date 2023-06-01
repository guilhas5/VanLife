import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav className='navbar--header'>
            <Link className="site--logo" to="/">#VanLife</Link>
            <ul className='navbar--items'>
                <li>
                    <NavLink
                        to='/host'
                        className={({ isActive }) => isActive ? "link--selected" : ""
                        }
                    >
                        Host
                    </NavLink>

                    <NavLink
                        to='about'
                        className={({ isActive }) => isActive ? "link--selected" : ""
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to='vans'
                        className={({ isActive }) => isActive ? "link--selected" : ""
                        }
                    >
                        Vans
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar