import { useState, useEffect } from 'react'
import { Link, useParams, Outlet, NavLink } from "react-router-dom"

function HostVansDetails() {
    const params = useParams();
    const [currentVan, setCurrentVan] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentVan(data.vans)
                setIsLoading(false)
            })
            .catch(error => {
                console.error("Erro fetching vans data", error)
            })
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (!currentVan) {
        return <h1>You dont have Vans to display</h1>
    }
    return (
        <section>
            <Link
                to='..'
                relative='path'
                className='return-details-btn'>
                <span>&#8592;</span>
                Back to all vans
            </Link>

            <div className='host-van-details--container'>
                <div className='host-van-details'>
                    <img className='host-van-details-img' src={currentVan.imageUrl} alt={`Photo of ${currentVan.imageUrl}`} />
                    <div className='host-van-details-info-text'>
                        <button className={`van--btn ${currentVan.type}--btn`}>{currentVan.type}</button>
                        <h3>{currentVan.name}</h3>
                        <h4>€{currentVan.price}<span className='day'>/day</span></h4>
                    </div>
                </div>
                <NavLink
                    to='.'
                    end
                    className={({ isActive }) => isActive ? "link--selected" : ""}
                >
                    Details
                </NavLink>
                <NavLink
                    to='pricing'
                    className={({ isActive }) => isActive ? "link--selected" : ""}
                >
                    Price
                </NavLink>
                <NavLink
                    to='photos'
                    className={({ isActive }) => isActive ? "link--selected" : ""}
                >
                    Photos
                </NavLink>
                <Outlet context={{ currentVan }} />
            </div>

        </section>
    )
}

export default HostVansDetails