import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import imageUrl from "/src/images/avatar-icon.png";


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
                    <Link
                        to="login"
                        className="login--link">
                        <img
                            src={imageUrl}
                            className='login--icon'
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar