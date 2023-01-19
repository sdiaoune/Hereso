import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './Pages/AboutUs';
import Amenities from './Pages/Amenities';
import Apartments from './Pages/Apartments';
import ApplyNow from './Pages/ApplyNow';
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';
import FloorPlans from './Pages/FloorPlans';
import Gallery from './Pages/Gallery';
import Grounds from './Pages/Grounds';
import Location from './Pages/Location';
import NewsEvents from './Pages/NewsEvents';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Services from './Pages/Services';
import VirtualTours from './Pages/VirtualTours';
import reportWebVitals from './reportWebVitals';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", //Home
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/location",
    element: <Location />
  },
  {
    path: "/amenities",
    element: <Amenities />
  },
  {
    path: "/apartments",
    element: <Apartments />
  },
  {
    path: "/floorplans",
    element: <FloorPlans />
  },
  {
    path: "/virtualtours",
    element: <VirtualTours />
  },
  {
    path: "/grounds",
    element: <Grounds />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/contactus",
    element: <ContactUs />
  },
  {
    path: "/applynow",
    element: <ApplyNow />
  },
  {
    path: "/events",
    element: <NewsEvents />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
