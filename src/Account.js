import React from 'react';
import './css/Account.css';
import HeaderRegistered from './HeaderRegistered';

const Account = () => {
  const handleSignUp = () => {
    // Handle sign-up logic here
  };

  return (
    <div>
      <HeaderRegistered />

      <div className="content">
        <h2>Profile</h2>

        <table className='profile-table'>
            <tr>
            <td className="left-column">Name</td>
            <td className="right-column">a{/*Retrieve data from DB*/}</td>
            </tr>
            <tr>
            <td className="left-column">Email</td>
            <td className="right-column">{/*Retrieve data from DB*/}</td>
            </tr>
            <tr>
            <td className="left-column">Phone</td>
            <td className="right-column">{/*Retrieve data from DB*/}</td>
            </tr>
            <tr>
            <td className="left-column">UserID</td>
            <td className="right-column">{/*Retrieve data from DB*/}</td>
            </tr>
        </table>

        <h2>Membership</h2>
        <table className='membership-table'>
            <tr>
            <td className="m-left-column">Fee</td>
            <td className="m-right-column">{/*Retrieve data from DB*/}</td>
            </tr>
            <tr>
            <td className="m-left-column">Start Date</td>
            <td className="m-right-column">{/*Retrieve data from DB*/}</td>
            </tr>
        </table>

        <h2>Professional</h2>
        <table className='professional-table'>
            <tr>
            <td className="p-left-column">Fee</td>
            <td className="p-right-column">{/*Retrieve data from DB*/}</td>
            </tr>
            <tr>
            <td className="p-left-column">Start Date</td>
            <td className="p-right-column">{/*Retrieve data from DB*/}</td>
            </tr>
        </table>
        


      </div>
    </div>
  );
};

export default Account;

