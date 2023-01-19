import Accordion from 'react-bootstrap/Accordion';

function AccordionExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Concierge Service</Accordion.Header>
        <Accordion.Body>
        A concierge service is a luxury amenity provided by many high-end apartment buildings to provide residents with the ultimate living experience. The concierge team is dedicated to ensuring the residents have a smooth and enjoyable stay by taking care of any requests or needs they may have. Whether it's booking a reservation at a top restaurant, arranging for transportation, or recommending local events and activities, the concierge is there to assist. They can also help with any issues that may arise with the apartment, such as maintenance requests, and ensure that they are handled quickly and efficiently. Additionally, many concierge services offer a variety of additional benefits, such as package delivery, dry cleaning and laundry services, and even dog walking. The concierge service is available 24/7 to provide assistance whenever it is needed, allowing residents to fully enjoy the luxury living experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Free Shuttle Bus</Accordion.Header>
        <Accordion.Body>
        A free shuttle bus service is a convenient and valuable amenity provided by many apartment communities, particularly luxury ones. It allows residents to easily travel to and from popular destinations within the surrounding area, such as shopping centers, grocery stores, and public transportation hubs, without the need for a personal vehicle. The shuttle bus operates on a regular schedule, providing residents with a reliable and stress-free way to get around. The shuttle bus is also equipped with comfortable seating, air conditioning, and other amenities for a pleasant ride. Additionally, many shuttle bus services offer additional features like Wi-Fi connectivity, allowing residents to stay connected and productive while on the go. The service is designed to help residents save on transportation costs, reduce their carbon footprint and enjoy the comfort and convenience of a shuttle service, making their daily commute or errands run more comfortable.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Car Rental</Accordion.Header>
        <Accordion.Body>
        A car rental service is a luxury amenity offered by some high-end apartment communities to provide residents with added convenience and flexibility. The service allows residents to rent a car on a short-term basis, whether it's for a weekend getaway, a special event, or running errands. The car rental service typically offers a wide range of vehicles to choose from, including luxury cars, SUVs, and vans, all of which are regularly maintained and serviced to ensure they are in top condition. Residents can easily reserve a car online or through a mobile app, and the car will be delivered to their doorstep at the scheduled time. The rental process is also seamless and convenient, with the service handling all the paperwork and insurance. Furthermore, Some car rental services also offer additional features like GPS navigation, car seats for children, and even a personal driver. This amenity provides residents with a stress-free and convenient way to travel, allowing them to fully enjoy the luxury living experience.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionExample;