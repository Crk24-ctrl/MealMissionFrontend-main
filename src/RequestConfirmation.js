import React , { useContext, useState }from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './RequestConfirmation.css';
import { useAuth} from './AuthContext';

const RequestConfirmation = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { donation } = location.state || {};
  const [error, setError] = useState('');

  if (!donation) {
    return <p>No donation selected.</p>;
  }

  const handleConfirm = async () => {
    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/request-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donationId: donation.donationID,
        
          requesterEmail:  user.email,
          donorEmail: donation.emailofDonor,
          donationDetails: {
            
            description: donation.description,
            quantity: donation.quantity,
            foodtype: donation.foodtype,
            expirationDate: donation.expirationDate,
          }
        }),
      });
      if (response.ok) {
        console.log('Request confirmed:', donation);
        navigate('/SuccessConfirmation'); 
      } else {
        throw new Error('Failed to request donation');
      }
    } catch (error) {
      console.error('Error requesting donation:', error);
      setError('An error occurred while requesting the donation. Please try again later.'); // Set error message
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Construct the WhatsApp link using the donor's phone number from the donation object
  const whatsappLink = `https://wa.me/${donation.donorPhoneNumber}?text=Hello%20${encodeURIComponent(donation.donorName)},%20I'm%20interested%20in%20your%20food%20donation:%20${encodeURIComponent(donation.description)}%20(${encodeURIComponent(donation.quantity)})%20expiring%20on%20${encodeURIComponent(donation.expirationDate)}.`;

  return (
    <div className="main-container">
      <Header />
      <div className="confirmation-container">
        <h2>Confirm request details:</h2>
        <div className="confirmation-content">
          <div className="donation-details">
            <p>Description: {donation.description}</p>
            <p>Quantity: {donation.quantity}</p>
            <p>Expiraion Date: {donation.expirationDate}</p>
          </div>
          <div className="donor-info">
            <h3>Donor Info:</h3>
            <p>Name: {donation.donorName}</p>
            <p>Phone: {donation.donorPhoneNumber}</p>
            <p>
              Get in touch with the donor for more information:{' '}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Click here to chat on WhatsApp</a>.
            </p>
          </div>
        </div>
        <div className="confirmation-buttons">
          <button className="back-button" onClick={handleBack}>Back</button>
          <button className="confirm-button" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestConfirmation;


