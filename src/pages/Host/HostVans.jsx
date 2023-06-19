import React, { Suspense } from 'react';
import { defer, Link, useLoaderData, Await } from 'react-router-dom';
import { getHostVans } from '../../../api';
import { requireAuth } from '../../../utils';

export async function loader({ request }) {
    await requireAuth(request)
    return defer({vans: getHostVans()})
}

function HostVans() {
    const dataPromise = useLoaderData()

        function renderHostVans(vans) {

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
            return (
                <div className='host-vans-list'>
                <section>
                    {hostVans}
                </section>
                </div>
            )
        }

    return (
        <section>
            <h1 className='host-vans-title'>Your Listed vans</h1>
                <Suspense fallback={<h4>Loading your vans...</h4>}>
                <Await resolve={dataPromise.vans}>
                {renderHostVans}
                </Await>
                </Suspense>
        </section>
    )
}

export default HostVans