import { React, useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from '/api.js';

export function loader() {
    return getVans()
}

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const vans = useLoaderData()

    const typeFilter = searchParams.get('type');

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

    if (error) {
        return <h1>There was an error : {error.message}</h1>
    }

    return (
        <div className='vans--container'>


            <h1 className='vans--title'>Explore our van options</h1>
            <div className='vans--filter'>
                <button
                    onClick={() => handleFilterChange('type', 'simple')}
                    className={`simple--btn ${typeFilter === 'simple' ? 'selected' : ''}`}
                >
                    Simple
                    {console.log(typeFilter)}
                </button>

                <button
                    onClick={() => handleFilterChange('type', 'luxury')}
                    className={`luxury--btn ${typeFilter === 'luxury' ? 'selected' : ''}`}                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'rugged')}
                    className={`rugged--btn ${typeFilter === 'rugged' ? 'selected' : ''}`}                >
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
                        <Link
                            to={van.id}
                            state={{
                                search: `?${searchParams.toString()}`,
                                type: typeFilter
                            }}>
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