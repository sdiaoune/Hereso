import logo from '../logo.svg';
import '../App.css';
import GridLayout from '../Components/GridLayout';

import { Button } from 'react-bootstrap';
import ApplyNowSection from '../Components/ApplyNowSection';

function AboutUs() {
    return (
      <div className="App">
        {/* English */}
        {/* <div>
          <br/>
          <br/>
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
        </div> */}
        {/* French */}
        <div>
          <br/>
          <br/>
        <section className="App-section">
          <div className='div-description'>
          <h1>
          ?? propos de nous
          </h1>
          <br/>
          <p>Bienvenue au complexe d'appartements Niarela, la quintessence de la vie opulente ?? Niarela, Bamako, Mali. Notre emplacement privil??gi??, ?? seulement 5 minutes du centre-ville anim??, offre aux r??sidents le m??lange parfait de commodit?? urbaine et de luxe serein.</p>
          <p>Notre complexe comprend 3 grands appartements enti??rement meubl??s, chacun avec 3 chambres somptueuses et des syst??mes de climatisation ?? la pointe de la technologie pour un confort et une classe ultimes. Le terrain du complexe dispose d'un jardin m??ticuleusement entretenu et d'une piscine ??tincelante, parfaits pour se d??tendre et profiter du soleil du Mali.</p>
          <p>Chaque appartement est ??quip?? des derni??res technologies, dont la t??l??vision par satellite et l'internet haut d??bit par fibre, ainsi qu'une cuisine ?? l'am??ricaine, id??ale pour organiser des d??ners. Afin de r??pondre ?? tous vos besoins avec la plus grande efficacit?? et discr??tion, nous vous proposons un service de conciergerie, navette et parking.</p>
          <p>Entrez dans le royaume de l'indulgence et d??couvrez le summum de la vie de luxe au complexe d'appartements Hereso. Contactez-nous d??s aujourd'hui pour planifier une visite et d??couvrir le style de vie de luxe qui vous attend.</p>
          </div>
        </section>
        <ApplyNowSection />
        </div>
      </div>
    );
  }
  
  export default AboutUs;