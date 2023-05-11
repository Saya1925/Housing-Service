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
  const [isNextClicked, setIsNextClicked] = useState(false);
  //const [handleBack, setHandleBack] = useState(() => {});
  //const [handlePublish, setHandlePublish] = useState(() => {});

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsNextClicked(true);
  };

  return (
    <>
    {!isNextClicked && (
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
          <button type="submit" className="form-submit-btn">Next</button>
        </div>
        </form>
</div>
 )}
 {isNextClicked && (
   <div>
     {/* Render the next component here */}
     <div className="confirm-task-container">
  <h1 className="confirm-task-title">Create a Service Request</h1>
  <p className="confirm-task-subtitle">Please confirm your request details:</p>
  <div className="confirm-task-details">
    <div className="confirm-task-detail">
      <div className="confirm-task-label">Request:</div>
      <div className="confirm-task-value">{need}</div>
    </div>
    <div className="confirm-task-detail">
      <div className="confirm-task-label">Budget:</div>
      <div className="confirm-task-value">{budget}</div>
    </div>
    <div className="confirm-task-detail">
      <div className="confirm-task-label">Category:</div>
      <div className="confirm-task-value">{category}</div>
    </div>
    <div className="confirm-task-detail">
      <div className="confirm-task-label">Start Date:</div>
      <div className="confirm-task-value">{startDate}</div>
    </div>
    <div className="confirm-task-detail">
      <div className="confirm-task-label">End Date:</div>
      <div className="confirm-task-value">{endDate}</div>
    </div>
    <div className="confirm-task-detail">
      <div className="confirm-task-label">Special Requirements:</div>
      <div className="confirm-task-value">{specialReq}</div>
    </div>
    <div className="confirm-task-detail">
      <div className="confirm-task-label">Location:</div>
      <div className="confirm-task-value">{location}</div>
    </div>
    {onlineTask && (
      <div className="confirm-task-detail">
        <div className="confirm-task-label">Details:</div>
        <div className="confirm-task-value">{details}</div>
      </div>
    )}
  </div>
  <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button className="form-back-btn" onClick={() => setIsNextClicked(false)}>Back</button>
    <button className="form-publish-btn" onClick={() => alert("Task Published")}>Publish</button>
  </div>
</div>
   </div>
 )}
</>
);
};

export default RequestServicePage;
