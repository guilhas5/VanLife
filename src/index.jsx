import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '/server';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetails from './pages/Host/HostVansDetails';
import HostVanPrice from './pages/Host/HostVanPrice';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVanInfo />}/>
              <Route path='pricing' element={<HostVanPrice />} />
              <Route path='photos' element={<HostVanPhotos />} />
              </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);