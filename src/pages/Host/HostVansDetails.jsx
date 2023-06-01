import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

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
            <div className='host-van-details--container'>
                <div className='host-van-details'>
                    <img className='host-van-details-img' src={currentVan.imageUrl} alt={`Photo of ${currentVan.imageUrl}`} />
                    <div className='host-van-details-info-text'>
                        <button className={`van--btn ${currentVan.type}--btn`}>{currentVan.type}</button>
                        <h3>{currentVan.name}</h3>
                        <h4>€{currentVan.price}<span className='day'>/day</span></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HostVansDetails