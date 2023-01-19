import logo from '../logo.svg';
import '../App.css';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';

function ContactUs() {
    return (
      <div className="App">
        <section className="App-section">
          <div className='div-description'>
          <h1>
            Contact Us
          </h1>
          <h2>Address: Bamako, Niarela, à côté de la cité du Niger</h2>
          <h2>Phone: +22368683775, +22378683775</h2>
          <h2>Email: heresso2022@gmail.com</h2>
          </div>
        </section>
        <GridLayout/>
        <section className='App-section'>
          <div className='div-description'>
          <h2>Your dream residence is within reach</h2>
          <div>
          <Button>Book a Tour</Button>
          <Button className='div-button'>Apply Now</Button>
          </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default ContactUs;