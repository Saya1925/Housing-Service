import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Membership.css';
import styles from './css/Membership.css';

const MembershipCustomer1 = () => {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('18');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
    return GTS;
  };

  const handleNextClick = () => {
    // Navigate to the next page (MembershipCustomer2.js)
    navigate('/MembershipCustomer2');
  };

  return (
    <div>
      <h1>Subscribe Customer Membership</h1>
      <p>for unlimited service request</p>
      <p>please select your membership options:</p><br/><br/>
      <div>

{/*$18 or $25*/}
      <table className="table-feeChoice">
        <tbody>
          <tr>
            <td><label htmlFor="option-18">$18</label></td>
            <td><label htmlFor="option-25">$25</label></td>
          </tr>
          <tr>
            <tr>
              <input
              type="radio"
              id="option-18"
              name="membership-option"
              value="18"
              checked={selectedOption === '18'}
              onChange={handleOptionChange}
              className={styles.inputWithMargin}
              />
            </tr>
            <td>
              <input
                type="radio"
                id="option-25"
                name="membership-option"
                value="25"
                checked={selectedOption === '25'}
                onChange={handleOptionChange}
                className={styles.inputWithMargin}
              />
            </td>
          </tr>
        </tbody>
      </table>        
      </div>

      <table className="table-style">
        <tbody>
          <tr>
            <td>price details</td>
          </tr>
          <tr>
            <tr>fee</tr>
            <td>${calculateAnnualFee()}</td>
          </tr>
          <tr>
            <tr>GTS.</tr>
            <td>${calculateGTS()}</td>
          </tr>
          <tr>
            <tr>TOTAL</tr>
            <td>${calculateTotalFee()}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default MembershipCustomer1;