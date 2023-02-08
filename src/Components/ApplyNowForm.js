import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ApplyNowForm() {
  return (
    <div>
    {/* English */}
    {/* <Form>
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="By submitting this form, I certify that the information provided is accurate and complete to the best of my knowledge. I authorize Niarela Luxury Apartment Complex to verify the information provided and contact my references." />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form> */}
    {/* French */}
    <Form>
        <br/>
        <h2>Informations personnelles</h2>
        
        <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Nom et prénom</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse e-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCurrentAddress">
            <Form.Label>Adresse actuelle</Form.Label>
            <Form.Control type="text" placeholder="Enter current address" />
        </Form.Group>

        
        <h2>Informations sur l'appartement</h2>

        <Form.Group className="mb-3" controlId="formBasicDesiredMoveInDate">
            <Form.Label>Date d'emménagement souhaitée</Form.Label>
            <Form.Control type="date" placeholder="Enter desired move-in date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesiredLeaseTerm">
            <Form.Label>Durée du bail souhaitée</Form.Label>
            <Form.Control type="number" placeholder="Enter desired lease term" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumberOfOccupants">
            <Form.Label>Nombre d'occupants</Form.Label>
            <Form.Control type="number" placeholder="Enter number of occupants" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesiredUnitType">
            <Form.Label>Type d'unité souhaité</Form.Label>
            <Form.Control type="number" placeholder="Enter desired unit type" />
        </Form.Group>

        <h2>Information d'emploi</h2>

        <Form.Group className="mb-3" controlId="formBasicCurrentEmployer">
            <Form.Label>Employeur actuel</Form.Label>
            <Form.Control type="text" placeholder="Enter current employer" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobTitle">
            <Form.Label>Titre d'emploi</Form.Label>
            <Form.Control type="text" placeholder="Enter job title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMonthlyIncome">
            <Form.Label>Revenu mensuel</Form.Label>
            <Form.Control type="number" placeholder="Enter monthly income" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContactNameSupervisor">
            <Form.Label>Nom du contact et numéro de téléphone du superviseur</Form.Label>
            <Form.Control type="number" placeholder="Enter contact name and phone number of supervisor" />
        </Form.Group>

        <h2>Les références</h2>

        <Form.Group className="mb-3" controlId="formBasicCurrentEmployer">
            <Form.Label>Nom et numéro de téléphone du propriétaire précédent</Form.Label>
            <Form.Control type="text" placeholder="Enter desired move-in date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobTitle">
            <Form.Label>Nom et numéro de téléphone de la référence personnelle</Form.Label>
            <Form.Control type="text" placeholder="Enter desired lease term" />
        </Form.Group>

        <h2>Informations Complémentaires</h2>

        <Form.Group className="mb-3" controlId="formBasicPets">
            <Form.Label>Avez-vous des animaux domestiques?</Form.Label>
            <Form.Control type="text" placeholder="Yes or No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDriversLicense">
            <Form.Label>Avez-vous un permis de conduire valide?</Form.Label>
            <Form.Control type="text" placeholder="Yes or No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicParkingSpace">
            <Form.Label>Vous êtes intéressé par la location d'une place de parking ?</Form.Label>
            <Form.Control type="text" placeholder="Yes or No" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="En soumettant ce formulaire, je certifie que les informations fournies sont exactes et complètes au meilleur de ma connaissance. J'autorise Niarela Luxury Apartment Complex à vérifier les informations fournies et à contacter mes références." />
        </Form.Group>
        <Button variant="primary" type="submit">
            Soumettre
        </Button>
    </Form>
    </div>
  );
}

export default ApplyNowForm;