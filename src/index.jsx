import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Routes,
  createRoutesFromElements
} from 'react-router-dom';
import '/server';
import './index.css';
import Home from './pages/Home';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetails, { loader as vanDetailsLoader } from './pages/Vans/VanDetails';
import Layout from './components/Layout';
import Dashboard, {loader as dashboardLoader} from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import HostVansDetails, { loader as hostVansDetailsLoader } from './pages/Host/HostVansDetails';
import HostVanPrice from './pages/Host/HostVanPrice';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';
import { requireAuth } from '../utils';
import NotFound from './pages/NotFound';
import Error from './components/Error';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />

    <Route
      path="vans/:id"
      element={<VanDetails />}
      errorElement={<Error />}
      loader={vanDetailsLoader} />

    <Route path="host" element={<HostLayout />}>

      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async ({ request }) => await requireAuth(request)}

      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async ({ request }) => await requireAuth(request)}

      />
      <Route
        path="vans"
        element={<HostVans />}
        errorElement={<Error />}
        loader={hostVansLoader} />

      <Route
        path="vans/:id"
        element={<HostVansDetails />}
        errorElement={<Error />}
        loader={hostVansDetailsLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async ({ request }) => await requireAuth(request)}

        />
        <Route
          path='pricing'
          element={<HostVanPrice />}
          loader={async ({ request }) => await requireAuth(request)}

        />
        <Route
          path='photos'
          element={<HostVanPhotos />}
          loader={async ({ request }) => await requireAuth(request)}

        />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}



ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);