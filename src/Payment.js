import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const CreditCardForm = () => {
  const [amount, setAmount] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCVC] = useState("");

  const handleToken = (token) => {
    console.log(token);
    alert(`Payment of $${amount / 100} received!`);
  };

  return (
    <div>
      <h1>Credit Card Payment</h1>
      <form>
        <label htmlFor="amount">Amount (in cents): </label>
        <input
          type="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <br />
        <label htmlFor="cardNumber">Card Number: </label>
        <input
          type="text"
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
          value={cardNumber}
        />
        <br />
        <label htmlFor="expiryMonth">Expiry Month: </label>
        <input
          type="text"
          id="expiryMonth"
          onChange={(e) => setExpiryMonth(e.target.value)}
          value={expiryMonth}
        />
        <br />
        <label htmlFor="expiryYear">Expiry Year: </label>
        <input
          type="text"
          id="expiryYear"
          onChange={(e) => setExpiryYear(e.target.value)}
          value={expiryYear}
        />
        <br />
        <label htmlFor="cvc">CVC: </label>
        <input
          type="text"
          id="cvc"
          onChange={(e) => setCVC(e.target.value)}
          value={cvc}
        />
        <br />
        <StripeCheckout
          stripeKey="<your_stripe_key>"
          token={handleToken}
          name="Credit Card Payment"
          amount={amount}
          billingAddress
          shippingAddress
        >
          <button type="submit">Pay with Card</button>
        </StripeCheckout>
      </form>
    </div>
  );
};

export default CreditCardForm;
