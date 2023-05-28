import React from 'react';
import { useState, useEffect } from 'react';

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVans(data.vans)
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    return (
        <div className='vans--container'>


            <h1 className='vans--title'>Explore our van options</h1>
            <div className='vans--filter'>
                <button className='simple--btn'>Simple</button>
                <button className='luxury--btn'>Luxury</button>
                <button className='rugged--btn'>Rugged</button>
                <button className='clear--btn'>Clear filters</button>
            </div>
            <div className='vans--list'>
                {vans.map((van, vanIndex) => (
                    <div key={vanIndex} className='vans--item'>
                        <img className='van--img' src={van.imageUrl} alt='van image' />
                        <h3 className='van--name'>{van.name}</h3>
                        <h3 className='van--price'>€{van.price}<span className='day'>/day</span></h3>
                        <button className='van--btn'>{van.type}</button>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Vans