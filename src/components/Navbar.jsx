import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='navbar--header'>
        <Link className="site--logo" to="/">#VanLife</Link>
            <ul className='navbar--items'>
                <li>
                    <Link to='/about'>About</Link>
                    <Link to='/vans'>Vans</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar