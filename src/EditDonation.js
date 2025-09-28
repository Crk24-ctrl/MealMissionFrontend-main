import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './EditDonation.css';

const EditDonation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { donation } = location.state || {};

  const [isEditing, setIsEditing] = useState(false);
  const [editedDonation, setEditedDonation] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    if (donation) {
      console.log('Donation received in EditDonation component:', donation);
      setEditedDonation({
        donationID: donation.donationID || '',
        foodtype: donation.foodtype,
        expirationDate: donation.expirationDate,
        quantity: donation.quantity,
        description: donation.description,
        image: donation.image,
      });
    } else {
      console.error('No donation found in location.state');
    }
  }, [donation]);

  if (!donation) {
    return <p>No donation selected.</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    console.log('Edited donation object:', editedDonation); // Log the edited donation object

    if (!editedDonation.donationID) {
      console.error('No donationID found in editedDonation');
      setError('No donationID found. Unable to update donation.');
      return;
    }

    try {
      const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/update-donation', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedDonation),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log('Donation updated successfully:', data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating donation:', error);
      setError('Error updating donation. Please try again.');
    }
  };

  const handleSubmitClick = () => {
    
    navigate('/ThankYou');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDonation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="main-container">
      <Header />
      <div className="edit-container">
        <h2>{isEditing ? 'Edit Donation' : 'Donation Details'}</h2>
        <div className="edit-content">
          <div className="edit-info">
            <img src={`data:image/jpeg;base64,${editedDonation.image}`} alt={editedDonation.description} className="food-image" />
            <p><strong>Description:</strong> {isEditing ? <input type="text" name="description" value={editedDonation.description} onChange={handleChange} /> : editedDonation.description}</p>
            <p><strong>Exp Date:</strong> {isEditing ? <input type="date" name="expirationDate" value={editedDonation.expirationDate} onChange={handleChange} /> : editedDonation.expirationDate}</p>
            <p><strong>Quantity:</strong> {isEditing ? <input type="number" name="quantity" value={editedDonation.quantity} onChange={handleChange} /> : editedDonation.quantity}</p>
          </div>
          <div className="edit-buttons">
            {isEditing ? (
              <>
                <button className="button edit-button" onClick={handleSaveClick}>Save</button>
                <button className="button cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <>
                <button className="button edit-button" onClick={handleEditClick}>Edit</button>
                <button className="button submit-button" onClick={handleSubmitClick}>Submit</button>
              </>
            )}
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditDonation;
