import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../api';
import { requireAuth } from '../../../utils';

export async function loader() {
    await requireAuth()
    return getHostVans()
}

function HostVans() {
    const vans = useLoaderData()

    const hostVans = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-container">
            <div className="host-van-single">
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>€{van.price}/day</p>
                </div>
            </div>
        </Link>

    ))
    console.log(vans.length)
    return (
        <section>
            <h1 className='host-vans-title'>Your Listed vans</h1>
            <div className='host-vans-list'>
                <section>
                    {hostVans}
                </section>
            </div>
        </section>
    )
}

export default HostVans