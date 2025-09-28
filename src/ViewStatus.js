import React, { useState, useEffect } from 'react';
import './ViewStatus.css';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from './AuthContext';

const ViewStatus = () => {
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);
  const [donations, setDonations] = useState([]); // Initialize the state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const apiUrl = 'https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/get-requests';

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          
          // Separate the requests into incoming and outgoing based on the user's email
          const incoming = data.filter(
            (request) => request.emailofDonor === user.email && request.status !== 'accepted' && request.status !== 'rejected'
          );
          const outgoing = data.filter(
            (request) => request.emailofreceiver === user.email
          );

          setIncomingRequests(incoming);
          setOutgoingRequests(outgoing);
        } else {
          throw new Error('Failed to fetch requests');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchRequests();
    }
  }, [user]);

    const handleAccept = async (id, donationId) => {
      try {
        const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/accept-request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requestId: id,
            donationId: donationId,
          }),
        });
    
        if (response.ok) {
          console.log(`Accepted request with ID: ${id}`);
          // Filter out the accepted request
          setIncomingRequests((prevRequests) =>
            prevRequests.filter((request) => request['request-id'] !== id)
          );
          // Optionally update the outgoing requests if needed
        } else {
          console.error('Failed to accept request');
        }
      } catch (error) {
        console.error('Error accepting request:', error);
      }
    };
    
    const handleReject = async (id) => {
      try {
        const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/reject-request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requestId: id,
            status: 'rejected',
          }),
        });
    
        if (response.ok) {
          console.log(`Rejected request with ID: ${id}`);
          // Filter out the rejected request
          setIncomingRequests((prevRequests) =>
            prevRequests.filter((request) => request['request-id'] !== id)
          );
        } else {
          console.error('Failed to reject request');
        }
      } catch (error) {
        console.error('Error rejecting request:', error);
      }
    };
    
    return (
      <div className="view-status-page">
        <Header />
        <div className="status-container">
          <h2 className="status-heading">
            <span className="black-text">View</span> <span className="green-text">Status</span>
          </h2>
    
          {loading ? (
  <div className="loading-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
          ) : (
            <>
              {error && <p className="error-message">Error: {error}</p>}
    
              <div className="status-section">
                <h3>Incoming Requests</h3>
                {incomingRequests.length > 0 ? (
                  incomingRequests.map((request) => (
                    <div key={request['request-id']} className="status-card">
                      <div className="info">
                        <h4>Recipient: {request.requestername}</h4>
                        <p>Description: {request.donationDetails.description}</p>
                        <p>Expiration Date: {request.donationDetails.expirationDate}</p>
                        <p>Food Type: {request.donationDetails.foodtype}</p>
                        <p>Quantity: {request.donationDetails.quantity}</p>
                      </div>
                      <div className="buttons">
                        <button
                          className="accept-button"
                          onClick={() => handleAccept(request['request-id'], request.donationID)}
                        >
                          Accept
                        </button>
                        <button
                          className="reject-button"
                          onClick={() => handleReject(request['request-id'])}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No incoming requests.</p>
                )}
              </div>
    
              <div className="status-section">
                <h3>Outgoing Requests</h3>
                {outgoingRequests.length > 0 ? (
                  outgoingRequests.map((request) => (
                    <div key={request['request-id']} className="status-card">
                      <div className="info">
                        <h4>Donor: {request.donorname}</h4>
                        <p>Description: {request.donationDetails.description}</p>
                        <p>Expiration Date: {request.donationDetails.expirationDate}</p>
                        <p>Food Type: {request.donationDetails.foodtype}</p>
                        <p>Quantity: {request.donationDetails.quantity}</p>
                      </div>
                      <div className={`status ${request.status}`}>{request.status}</div>
                    </div>
                  ))
                ) : (
                  <p>No outgoing requests.</p>
                )}
              </div>
            </>
          )}
        </div>
        <Footer /> 
      </div>
    );
  };
    export default ViewStatus;