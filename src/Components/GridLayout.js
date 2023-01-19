import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import image1 from '../images/PHOTO-2023-01-15-17-40-06 3.jpg';
import image2 from '../images/PHOTO-2023-01-15-17-40-08 4.jpg';
import image3 from '../images/PHOTO-2023-01-15-17-40-08 2.jpg';
import image4 from '../images/PHOTO-2023-01-15-17-40-07 7.jpg';
import image5 from '../images/PHOTO-2023-01-15-17-40-07 4.jpg';

function GridLayout() {
  return (
      <div className='img-wrapper'>
        <div><img style={{width: '100%'}} src={image1} /></div>
        <div><img style={{width: '100%'}} src={image2} /></div>
        <div><img style={{width: '100%'}} src={image3} /></div>
        <div><img style={{width: '100%'}} src={image4} /></div>
        <div><img style={{width: '100%'}} src={image5} /></div>
      </div>
  );
}

export default GridLayout;