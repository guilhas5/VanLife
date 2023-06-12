
import { Link, useParams, Outlet, NavLink, useLoaderData } from "react-router-dom"
import { getHostVans } from '../../../api';
import { requireAuth } from "../../../utils";

export async function loader({ params, request }) {
    await requireAuth(request)
    return getHostVans(params.id)
}

function HostVansDetails() {
    const params = useParams();
    const currentVan = useLoaderData()
  
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