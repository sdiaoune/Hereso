import logo from '../logo.svg';
import '../App.css';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';

function AboutUs() {
    return (
      <div className="App">
        <section className="App-section">
          <div className='div-description'>
          <h1>
            About Us
          </h1>
          <br/>
          <p>Welcome to the Niarela Apartment Complex, the epitome of opulent living in Niarela, Bamako, Mali. Our prime location, just 5 minutes from the bustling downtown area, offers residents the perfect blend of urban convenience and serene luxury.</p>

          <p>Our complex features 3 grand and fully furnished apartments, each with 3 sumptuous bedrooms and state-of-the-art air-conditioning systems for ultimate comfort and class. The grounds of the complex boast a meticulously manicured garden and sparkling pool, perfect for unwinding and enjoying the Mali sun.</p>

          <p>Each apartment is equipped with the latest technology, including satellite television and high-speed fiber internet, as well as an American-style kitchen, perfect for hosting dinner parties. To ensure that all your needs are met with the utmost efficiency and discretion, we offer a concierge service, shuttle bus, and parking.</p>

          <p>Step into the realm of indulgence and experience the ultimate in luxury living at the Hereso Apartment Complex. Contact us today to schedule a tour and discover the luxury lifestyle that awaits you.</p>
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
  
  export default AboutUs;