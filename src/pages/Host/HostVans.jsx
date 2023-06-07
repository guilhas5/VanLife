import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function HostVans() {
    const [vans, setVans] = useState([]);
    useEffect(() => {
        fetch(`/api/host/vans`)
            .then(res => res.json())
            .then(data => setVans(data.vans))
            .catch(error => {
                // Handle the error
                console.error('Error fetching vans:', error);
            })
    }, [])

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
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVans}
                        </section>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans