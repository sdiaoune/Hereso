import logo from '../logo.svg';
import '../App.css';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';

import image1 from '../images/PHOTO-2023-01-15-17-40-06 3.jpg';
import image2 from '../images/PHOTO-2023-01-15-17-40-08 4.jpg';
import image3 from '../images/PHOTO-2023-01-15-17-40-08 2.jpg';
import image4 from '../images/PHOTO-2023-01-15-17-40-07 7.jpg';
import image5 from '../images/PHOTO-2023-01-15-17-40-07 4.jpg';

import image6 from '../images/hereso1.jpg';
import image7 from '../images/hereso2.jpg';
import image8 from '../images/hereso3.jpg';
import image9 from '../images/hereso4.jpg';
import image10 from '../images/hereso5.jpg';

import image11 from '../images/hereso6.jpg';
import image12 from '../images/hereso7.jpg';
import image13 from '../images/hereso8.jpg';
import image14 from '../images/hereso9.jpg';
import image15 from '../images/hereso10.jpg';



function Gallery() {
    return (
      <div className="App">
        <section className="App-section">
          <div className='div-description'>
          <h1>
            Gallery
          </h1>
          <div>
            <div className='image'><img src={image1} /></div>
            <div className='image'><img src={image2} /></div>
            <div className='image'><img src={image3} /></div>
            <div className='image'><img src={image4} /></div>
            <div className='image'><img src={image5} /></div>
            <div className='image'><img src={image6} /></div>
            <div className='image'><img src={image7} /></div>
            <div className='image'><img src={image8} /></div>
            <div className='image'><img src={image9} /></div>
            <div className='image'><img src={image10} /></div>
            <div className='image'><img src={image11} /></div>
            <div className='image'><img src={image12} /></div>
            <div className='image'><img src={image13} /></div>
            <div className='image'><img src={image14} /></div>
            <div className='image'><img src={image15} /></div>
          </div>
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
  
  export default Gallery;