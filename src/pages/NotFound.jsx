import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notfound--container'>
    <h1>Sorry, the page you were looking for was not found.</h1>
    <Link 
    to={"/"} 
    className='notfound--btn'>Return to Home
    </Link>
    <Footer />
    </div>
  )
}

export default NotFound