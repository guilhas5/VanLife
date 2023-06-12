import { React, useState, Suspense } from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { getVans } from '/api.js';

export function loader() {
    return defer({ vans: getVans() })
}

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dataPromise = useLoaderData()

    const typeFilter = searchParams.get('type');



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
    function renderVanElements(vans) {
        const displayedVans =
            typeFilter ? vans.filter(van => van.type === typeFilter)
                : vans
        const vansElements = displayedVans.map((van, vanIndex) => (
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

        ))


        return (
            <>
                <div className='vans--filter'>
                    <button
                        onClick={() => handleFilterChange('type', 'simple')}
                        className={`simple--btn ${typeFilter === 'simple' ? 'selected' : ''}`}
                    >
                        Simple
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
                    {vansElements}
                </div>
            </>
        )
    }

    return (
        <div className='vans--container'>
            <h1 className='vans--title'>Explore our van options</h1>
            <Suspense fallback={<h1>Loading Vans...</h1>}>
                <Await resolve={dataPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>


        </div>
    )
}

export default Vans