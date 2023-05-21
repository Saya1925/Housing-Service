import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Membership.css';
import HeaderMembership from './HeaderMembership';
import axios from 'axios';

const MembershipCustomer2 = ({ handleBack, handleProceed }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [billAddress, setBillAddress] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCVCChange = (e) => {
    setCVC(e.target.value);
  };

  const handleBillAddressChange = (e) => {
    setBillAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or submission logic here
    // For example, you can check if the card number and card holder are valid

    // Call the handleProceed function to proceed to the next step
    handleProceed();
  };

  const handleBackClick = () => {
    handleBack();
  };
  return (
    <div>
    <HeaderMembership />
      <h1>Subscribe Customer Membership</h1>
      <p>for unlimited service request</p>
      <p>please select your membership options:</p><br/><br/>

      <form className="handleSubmit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label><br/>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="cardHolder">Card Holder:</label><br/>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            required
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date:</label><br/>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            required
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="cvc">CVC Number:</label><br/>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={handleCVCChange}
            required
            className="input-style"
          />
        </div>
        <div>
          <label htmlFor="billAddress">Bill Address:</label><br/>
          <input
            type="text"
            id="billAddress"
            value={billAddress}
            onChange={handleBillAddressChange}
            required
            className="input-style"
          />
        </div>
        <div>
          <button className="back-button" onClick={handleBack}>Back</button>
          <button className="proceed-button" type="submit">Proceed</button>
        </div>
      </form>
    </div>
  );
};

export default MembershipCustomer2;
