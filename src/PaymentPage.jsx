import React from 'react';

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-title">payment page</h1>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">card number</label>
          <input type="text" id="cardNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">expire date</label>
          <input type="text" id="expiryDate" />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" />
        </div>
        <button className="payment-button">Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
