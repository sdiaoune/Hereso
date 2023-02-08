import logo from '../logo.svg';
import '../App.css';

import ApplyNowForm from '../Components/ApplyNowForm';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';
import ApplyNowSection from '../Components/ApplyNowSection';

function ApplyNow() {
    return (
      <div className="App">
        <section className="App-section">
          <div className='div-description'>
          <br/>
          <br/>
          <h1>
            Apply Now
          </h1>
          <ApplyNowForm />
          </div>
        </section>
        <ApplyNowSection/>
      </div>
    );
  }
  
  export default ApplyNow;