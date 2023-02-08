import logo from '../logo.svg';
import '../App.css';
import AccordionExample from '../Components/AccordionExample';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';
import ApplyNowSection from '../Components/ApplyNowSection';

function Amenities() {
    return (
      <div className="App">
        <br/>
        <br/>
        {/* English */}
        {/* <section className="App-section">
          <div className='div-description'>
          <h1>
          Amenities
          </h1>
          <AccordionExample />
          </div>
        </section> */}
        {/* French */}
        <section className="App-section">
          <div className='div-description'>
          <h1>
          Agréments
          </h1>
          <AccordionExample />
          </div>
        </section>
        <ApplyNowSection/>
      </div>
    );
  }
  
  export default Amenities;