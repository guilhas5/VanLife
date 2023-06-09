import React from 'react';
import { useRouteError } from 'react-router-dom';


function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Error:{error.message}</h2>
            <pre>{error.status} - {error.statusText}</pre>
        </div>
    )
}

export default Error