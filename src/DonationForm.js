import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from './AuthContext';
import './DonationForm.css';

const DonationForm = () => {
    const [foodtype, setFoodtype] = useState('cooked');
    const [quantityLabel, setQuantityLabel] = useState('Quantity:');
    const [imageBase64, setImageBase64] = useState('');
    const [error, setError] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [isFruitsVegChecked, setIsFruitsVegChecked] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth(); // Access user from AuthContext

    useEffect(() => {
        updateQuantityLabel();
    }, [foodtype]);

    const handleFoodtypeChange = (e) => {
        setFoodtype(e.target.value);
       
    };

    const updateQuantityLabel = () => {
        if (foodtype === 'raw' || foodtype === 'cooked') {
            setQuantityLabel('Quantity (kg):');
        } else if (foodtype === 'canned') {
            setQuantityLabel('Quantity (items):');
        }
    };

    const handleImageUpload = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageBase64(reader.result.split(',')[1]);
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleImageDelete = () => {
        setImageBase64('');
        setImagePreview('');
        document.getElementById('food-photo').value = '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('User not authenticated');
            return;
        }

        const foodPhoto = e.target['food-photo'].files[0];
        if (foodPhoto) {
            handleImageUpload(foodPhoto);
        }

        if (!imageBase64) {
            setError('Image is still uploading. Please wait.');
            return;
        }

        // Assuming user object has name and email
        const donation = {
            foodtype,
            expirationDate: e.target['expiration-date'].value,
            quantity: e.target['quantity'].value,
            description: e.target['description'].value,
            image: imageBase64,
            emailofDonor: user.email,
            donorName: user.name, // Use the name from AuthContext
            donorPhoneNumber: user.phoneNumber,
        };

        try {
            const response = await fetch('https://gkk8zqlh8h.execute-api.eu-west-2.amazonaws.com/dep/add-donation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donation),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Donation successful:', data);
            navigate('/EditDonation', { state: { donation: { ...donation, donationID: data.donationID } } });
        } catch (error) {
            console.error('Error submitting donation:', error);
            setError(error.message);
        }
    };

    return (
        <div className="donation-form-page">
            <Header />
            <div className="donation-form-container">
                <h2 className="form-title">
                    <span className="title-black">Donation </span>
                    <span className="title-green">Form</span>
                </h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="donation-form">
                    <div className="form-group">
                        <label htmlFor="food-type">Type of Food</label>
                        <select id="food-type" name="food-type" value={foodtype} onChange={handleFoodtypeChange} className="form-select">
                            <option value="cooked">Cooked</option>
                            <option value="canned">Canned</option>
                            <option value="raw">Raw</option>
                            <option value="specific-fruits/vegetables">Fruits/Vegetables (Apple, Banana, Tomato, Cucumber, Orange, Potato, Bemye)</option>
                            <option value="other-fruits/vegetables">Fruits/Vegetables (Other)</option>
                            
                        </select>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiration-date">Expiration Date</label>
                        <input type="date" id="expiration-date" name="expiration-date" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">{quantityLabel}</label>
                        <input type="number" id="quantity" name="quantity" min="1" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="description" placeholder="e.g., fresh apples, gluten free bread" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="food-photo">Upload Photo</label>
                        <input type="file" id="food-photo" name="food-photo" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} className={`form-inputt ${imagePreview ? 'hidden' : ''}`} />
                        {imagePreview && (
                            <div className="image-preview">
                                <img src={imagePreview} alt="Preview" />
                                <button type="button" onClick={handleImageDelete} className="delete-image-button">Delete</button>
                            </div>
                        )}
                    </div>
                  
                    <div className="form-group checkbox-group">
                        <input type="checkbox" id="assure" name="assure" required className="checkbox-input"/>
                        <label htmlFor="assure" className="checkbox-label">I assure that the food quality and hygiene were maintained</label>
                    </div>
                    <button type="submit" className="submit-button">Donate Now</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default DonationForm;
