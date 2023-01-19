import logo from '../logo.svg';
import '../App.css';

import ApplyNowForm from '../Components/ApplyNowForm';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';

function ApplyNow() {
    return (
      <div className="App">
        <section className="App-section">
          <div className='div-description'>
          <h1>
            Apply Now
          </h1>
          <ApplyNowForm />
          </div>
        </section>
        <GridLayout />
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
  
  export default ApplyNow;