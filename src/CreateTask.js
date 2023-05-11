import React, { useState } from 'react';
import './css/CreateTask.css';


const RequestServicePage = () => {
  const [need, setNeed] = useState('');
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [specialReq, setSpecialReq] = useState('');
  const [location, setLocation] = useState('');
  const [onlineTask, setOnlineTask] = useState(false);
  const [details, setDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Request Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">What do you need done?</label>
          <input type="text" className="form-input" value={need} onChange={(e) => setNeed(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Budget:</label>
          <input type="text" className="form-input" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Category:</label>
          <input type="text" className="form-input" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Start Date:</label>
          <input type="date" className="form-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">End Date:</label>
          <input type="date" className="form-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Special Requirement (optional):</label>
          <input type="text" className="form-input" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">Location:</label>
          <input type="text" className="form-input" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="form-label">It is an online task:</label>
          <input type="checkbox" className="form-checkbox" checked={onlineTask} onChange={(e) => setOnlineTask(e.target.checked)} />
        </div>
        {onlineTask && (
          <div className="form-field">
            <label className="form-label">Details (optional):</label>
            <input type="text" className="form-input" value={details} onChange={(e) => setDetails(e.target.value)} />
          </div>
        )}
        <div className="form-actions">
          <button type="submit" className="form-submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequestServicePage;
