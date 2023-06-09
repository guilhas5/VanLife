import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Error() {
    const data = useLoaderData
        return (
            <div>
                <h2>An error occurred</h2>
            </div>
        )
    }

export default Error