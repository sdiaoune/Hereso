import {Button} from 'react-bootstrap';
import GridLayout from './GridLayout';

function ApplyNowSection() {
    return (
        <div>
          {/* English */}
          {/* <section className='App-section'>
          <div className='div-description'>
          <h2>Your dream residence is within reach</h2>
          <div>
          <Button>Book a Tour</Button>
          <a href="/applynow"><Button className='div-button'>Apply Now</Button></a>
          </div>
          </div>
          </section> */}
          {/* French */}
          <GridLayout/>
          <section className='App-section'>
          <div className='div-description'>
          <h2>Votre résidence de rêve est à portée de main</h2>
          <div>
          {/* <Button>Réserver une visite</Button> */}
          <a href="/applynow"><Button className='div-button'>Appliquer maintenant</Button></a>
          </div>
          </div>
          </section>
        </div>
        
    )
}

export default ApplyNowSection;