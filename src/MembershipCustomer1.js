import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Membership.css';
import styles from './css/Membership.css';

const MembershipCustomer1 = () => {

  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('18');

  // Define a state to track if the button is clicked
  const [buttonClicked, setButtonClicked] = useState(false);
  
  // Modify the handleOptionChange function to reset the buttonClicked state when an option is changed
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setButtonClicked(false);
  };
  
  // Add a variable to store the CSS class based on buttonClicked state
  const radioLabelClass = selectedOption === '18' ? styles['label-fee-coral'] : styles['label-fee'];

  const calculateAnnualFee = () => {
    const basePrice = parseInt(selectedOption);
    const annualFee = basePrice * 12;
    return annualFee;
  };

  const calculateGTS = () => {
    const annualFee = calculateAnnualFee();
    const GTS = annualFee * 0.1; // Add 10% GTS
    return GTS;
  };

  const calculateTotalFee = () => {
    const annualFee = calculateAnnualFee();
    const GTS = calculateGTS();
    const totalFee = annualFee + GTS;
    return totalFee;
  };

  const handleNextClick = () => {
    // Navigate to the next page (MembershipCustomer2.js)
    navigate('/MembershipCustomer2');
  };

  return (
    <div>
      <h1>Subscribe Customer Membership</h1>
      <p className="description">for unlimited service request</p>
      <p className="description">please select your membership options:</p><br/><br/>
      <div>

{/*$18 or $25*/}
      <table className="table-feeChoice">
        <tbody>
          <tr>
            <td>
              <label htmlFor="option-18" className="label-fee">
                <span>$18</span></label>
                <p className="additional-text">pay annually ($216)</p>
            </td>
            <td>
              <label htmlFor="option-25" className="label-fee">
                <span>$25</span></label>
                <p className="additional-text">pay monthly</p>
            </td>
          </tr>
          <tr>
            <td>
              <input
              type="radio"
              id="option-18"
              name="membership-option"
              value="18"
              checked={selectedOption === '18'}
              onChange={handleOptionChange}
              className={`${styles.inputWithMargin} inputWithMargin`}
              />
            </td>
            <td>
              <input
                type="radio"
                id="option-25"
                name="membership-option"
                value="25"
                checked={selectedOption === '25'}
                onChange={handleOptionChange}
                className={`${styles.inputWithMargin} inputWithMargin`}
              />
            </td>
          </tr>
        </tbody>
      </table>        
      </div>

      <table className="table-style">
        <tbody>
          <tr className="price-details">
            <td>price details</td>
          </tr>
          <tr>
            <td className="row-label">fee</td>
            <td className="row-label">${calculateAnnualFee()}</td>
          </tr>
          <tr>
            <td className="row-label">GTS.</td>
            <td className="row-label">${calculateGTS()}</td>
          </tr>
          <tr>
            <td className="row-empty"> </td>
          </tr>
          <tr className="total-label">
            <td className="row-label">TOTAL</td>
            <td className="row-label">${calculateTotalFee()}</td>
          </tr>
        </tbody>
      </table>

      <button className="next-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default MembershipCustomer1;