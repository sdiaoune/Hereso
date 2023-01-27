import logo from './assets/HeresoLogo.PNG';
import './App.css';

import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

import NavBar from './Components/NavBar';

// import ReactPlayer from 'react-player'

import videoFile from './assets/Hereso2.webm';
import GridLayout from './Components/GridLayout';

function App() {

  useEffect(()=>{
  }, []);

  return (
    <div className='App'>
      <div className='main'>
        <div className='overlay'></div>
        <video src={videoFile} autoPlay loop muted />
        <div className='content'>
          <img src={logo} style={{height: '50%'}} />
          {/* <h1>Hereso</h1>
          <h2>Luxury Apartment Living in Mali</h2> */}
        </div>
      </div>
      
      <section className='App-section'>
        
        <div className='div-description'>
        <h2>Luxury Apartment in Niarela, Bamako, ML</h2>
        <br/>
        <p>
        The Luxury Apartment Complex in Niarela (close to Cité du Niger) is the epitome of opulent living. Nestled in a prime location, just a mere 5 minutes away from the bustling downtown area, this complex offers residents the perfect blend of urban convenience and serene luxury. Boasting 3 grand and fully furnished apartments, each with 3 sumptuous bedrooms, all featuring state-of-the-art air-conditioning systems, this complex provides serenity, cleanliness, comfort and class.
        </p>
        <p>
        The grounds of the complex are nothing short of stunning, featuring a meticulously manicured garden, and a sparkling pool, ideal for unwinding and enjoying the Mali sun. Each apartment is equipped with the latest technology, including satellite television and high-speed fiber internet, as well as an American-style kitchen, perfect for hosting dinner parties. The complex also offers a concierge service, shuttle bus, washing & dryer machines, video surveillance cameras and parking, ensuring that all your needs are met with the utmost efficiency and discretion.
        </p>
        <p>
        Step into the realm of indulgence and experience the ultimate in luxury living at the Hereso Apartment Complex.
        </p>
        <div>
          <Button>View Floorplans</Button>
          <Button className='div-button'>View Amenities</Button>
        </div>
        </div>
        </section>
        <GridLayout/>
        <section className='App-section'>
          <div className='div-description'>
          <h2>Your dream residence is within reach</h2>
          <div>
          <Button>Book a Tour</Button>
          <a href="/applynow"><Button className='div-button'>Apply Now</Button></a>
          </div>
          </div>
        </section>
    </div>
  );
}

export default App;
