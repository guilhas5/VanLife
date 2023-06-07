import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';


function VanDetails() {
    const params = useParams();
    const location = useLocation()
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    
    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className='van-details-container'>
            <Link
                to={`..${search}`}
                relative='path'
                className='return-details-btn'>
                <span>&#8592;</span>
                Back to {type} vans
            </Link>

            {van ? (
                <div className='van--details'>
                    <img className='van--image' src={van.imageUrl} alt="van image" />
                    <button className=
                        {`van--btn ${van.type === 'simple' ? 'simple--btn' :
                            van.type === 'luxury' ? 'luxury--btn' : van.type === 'rugged' ?
                                'rugged--btn' : ''}`}>{van.type}</button>
                    <h1>{van.name}</h1>
                    <h2 className='van--price'>€{van.price}<span className='day'>/day</span></h2>
                    <p className='van--description'>{van.description}</p>
                    <button className='book--btn'>Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetails