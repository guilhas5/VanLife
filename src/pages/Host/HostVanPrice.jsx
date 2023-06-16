import React from 'react'
import { useOutletContext } from 'react-router-dom';
function HostVanPrice() {
  const { currentVan } = useOutletContext();
  return (
    <div className='host-van-price'>
      <h1>€{currentVan.price}</h1>
    </div>
  )
}

export default HostVanPrice