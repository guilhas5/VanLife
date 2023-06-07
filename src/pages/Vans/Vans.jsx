import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState([]);

    const typeFilter = searchParams.get('type');
    console.log('typeFilter');


    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    const displayedVans =
        typeFilter ? vans.filter(van => van.type === typeFilter)
            : vans

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className='vans--container'>


            <h1 className='vans--title'>Explore our van options</h1>
            <div className='vans--filter'>
                <button
                    onClick={() => handleFilterChange('type', 'simple')}
                    className='simple--btn'
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'luxury')}
                    className='luxury--btn'
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'rugged')}
                    className='rugged--btn'
                >
                    Rugged
                </button>
                
                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange('type', null)}
                        className='clear--btn'
                    >
                        Clear filters
                    </button>
                ) : null}
            </div>


            <div className='vans--list'>
                {displayedVans.map((van, vanIndex) => (
                    <div key={vanIndex} className='vans--item'>
                        <Link to={`/vans/${van.id}`}>
                            <img className='van--img' src={van.imageUrl} alt='van image' />
                            <h3 className='van--name'>{van.name}</h3>
                            <h3 className='van--price'>€{van.price}<span className='day'>/day</span></h3>
                            <button className=
                                {`van--btn ${van.type === 'simple' ? 'simple--btn' :
                                    van.type === 'luxury' ? 'luxury--btn' : van.type === 'rugged' ? 'rugged--btn' : ''}`}>{van.type}</button>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Vans