import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '/src/images/about.png';

function Home() {
  return (
    <div className='about--container'>
      <img className='about--img' src={aboutImg} alt='van camping' />
      <div className='about--info'>
        <h1 className='about--title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='about--text'>Our mission is to enliven your road trip with the perfect
          travel van rental.
          Our vans are recertified before each trip to ensure your travel plans can go off
          without a hitch. (Hitch costs extra 😉)
        </p>
        <p className='about--text'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className='about--explore'>
          <h2 className='about-explore-text'>Your destination is waiting.
            Your van is ready.</h2>
          <Link className='explore--btn' to="/vans">Explore our Vans</Link>
        </div>
      </div>
    </div>
  )
}

export default Home