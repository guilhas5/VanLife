import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (

    <img src={currentVan.imageUrl} alt={`Photo of ${currentVan.imageUrl}`} />
  )
}

export default HostVanPhotos