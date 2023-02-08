import logo from '../logo.svg';
import '../App.css';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';
import ApplyNowSection from '../Components/ApplyNowSection';

function ContactUs() {
    return (
      <div className="App">
        <br/>
        <br/>
        {/* English */}
        {/* <section className="App-section">
          <div className='div-description'>
          <h1>
            Contact Us
          </h1>
          <h2>Address: Bamako, Niarela, à côté de la cité du Niger</h2>
          <h2>Phone: +22368683775, +22378683775</h2>
          <h2>Email: heresso2022@gmail.com</h2>
          </div>
        </section> */}
        {/* French */}
        <section className="App-section">
          <div className='div-description'>
          <h1>
          Contactez-nous
          </h1>
          <h2>Adresse: Bamako, Niarela, à côté de la cité du Niger</h2>
          <h2>Téléphone: +22368683775, +22378683775</h2>
          <h2>Email: heresso2022@gmail.com</h2>
          </div>
        </section>
        <ApplyNowSection/>
      </div>
    );
  }
  
  export default ContactUs;