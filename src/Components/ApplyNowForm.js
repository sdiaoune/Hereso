import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ApplyNowForm() {
  return (
    <Form>
        <br/>
        <h2>Personal Information</h2>
        
        <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCurrentAddress">
            <Form.Label>Current Address</Form.Label>
            <Form.Control type="text" placeholder="Enter current address" />
        </Form.Group>

        
        <h2>Apartment Information</h2>

        <Form.Group className="mb-3" controlId="formBasicDesiredMoveInDate">
            <Form.Label>Desired Move-in Date</Form.Label>
            <Form.Control type="date" placeholder="Enter desired move-in date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesiredLeaseTerm">
            <Form.Label>Desired Lease Term</Form.Label>
            <Form.Control type="number" placeholder="Enter desired lease term" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumberOfOccupants">
            <Form.Label>Number of Occupants</Form.Label>
            <Form.Control type="number" placeholder="Enter number of occupants" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesiredUnitType">
            <Form.Label>Desired Unit Type</Form.Label>
            <Form.Control type="number" placeholder="Enter desired unit type" />
        </Form.Group>

        <h2>Employment Information</h2>

        <Form.Group className="mb-3" controlId="formBasicCurrentEmployer">
            <Form.Label>Current Employer</Form.Label>
            <Form.Control type="text" placeholder="Enter current employer" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" placeholder="Enter job title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMonthlyIncome">
            <Form.Label>Monthly Income</Form.Label>
            <Form.Control type="number" placeholder="Enter monthly income" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContactNameSupervisor">
            <Form.Label>Contact Name and Phone Number of Supervisor</Form.Label>
            <Form.Control type="number" placeholder="Enter contact name and phone number of supervisor" />
        </Form.Group>

        <h2>References</h2>

        <Form.Group className="mb-3" controlId="formBasicCurrentEmployer">
            <Form.Label>Name and Phone Number of Previous Landlord</Form.Label>
            <Form.Control type="text" placeholder="Enter desired move-in date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobTitle">
            <Form.Label>Name and Phone Number of Personal Reference</Form.Label>
            <Form.Control type="text" placeholder="Enter desired lease term" />
        </Form.Group>

        <h2>Additional Information</h2>

        <Form.Group className="mb-3" controlId="formBasicPets">
            <Form.Label>Do you have any pets?</Form.Label>
            <Form.Control type="text" placeholder="Yes or No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDriversLicense">
            <Form.Label>Do you have a valid driver's license?</Form.Label>
            <Form.Control type="text" placeholder="Yes or No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicParkingSpace">
            <Form.Label>Are you interested in renting a parking space?</Form.Label>
            <Form.Control type="text" placeholder="Yes or No" />
        </Form.Group>

        {/*  */}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="By submitting this form, I certify that the information provided is accurate and complete to the best of my knowledge. I authorize Niarela Luxury Apartment Complex to verify the information provided and contact my references." />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  );
}

export default ApplyNowForm;