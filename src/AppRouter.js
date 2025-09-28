import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';
import AccountPage from './AccountPage';
import HomePage from './HomePage';
import DonationForm from './DonationForm';
import SendPasswordResetLink from './SendPasswordResetLink';
import PasswordReset from './PasswordReset';
import DonationFeed from './DonationFeed';
import RequestConfirmation from './RequestConfirmation';
import SuccessConfirmation from './SuccessConfirmation';
import EditDonation from './EditDonation';
import ThankYou from './ThankYou';
import FAQs from './FAQs';
import ViewStatus from './ViewStatus';
import { AuthProvider } from './AuthContext';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/DonationForm" element={<DonationForm />} />
          <Route path="/SendPasswordResetLink" element={<SendPasswordResetLink />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/DonationFeed" element={<DonationFeed />} />
          <Route path="/RequestConfirmation" element={<RequestConfirmation />} />
          <Route path="/SuccessConfirmation" element={<SuccessConfirmation />} />
          <Route path="/EditDonation" element={<EditDonation />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/ViewStatus" element={<ViewStatus />} />
        </Routes>
       
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
