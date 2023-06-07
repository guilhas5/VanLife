import React from 'react'
import { useOutletContext } from 'react-router-dom';
function HostVanPrice() {
  const { currentVan } = useOutletContext();
  return (

    <h1>{currentVan.price}</h1>
  )
}

export default HostVanPrice