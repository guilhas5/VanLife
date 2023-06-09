import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVan } from '../../../api';

export function loader({ params }) {
    return getVan(params.id)
}

function VanDetails() {
    const params = useParams();
    const location = useLocation();
    const van = useLoaderData();

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className='van-details-container'>
            <Link
                to={`..${search}`}
                relative='path'
                className='return-details-btn'>
                <span>&#8592;</span>
                Back to {type} vans
            </Link>

            <div className='van--details'>
                <div>
                    <img className='van--image' src={van.imageUrl} alt="van image" />
                </div>
                <div className='van-details-info'>
                    <button className=
                        {`van--btn ${van.type}--btn`}>{van.type}</button>
                    <h1>{van.name}</h1>
                    <h2 className='van--price'>€{van.price}<span className='day'>/day</span></h2>
                    <p className='van--description'>{van.description}</p>
                    <button className='book--btn'>Rent this van</button>
                </div>
            </div>
        </div>
    )
}

export default VanDetails