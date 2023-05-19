import React, { useState, useEffect } from 'react';
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
  const [isListView, setIsListView] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Load orders from localStorage on initial component mount
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsNextClicked(true);
  };

  const handlePublish = (event) => {
    event.preventDefault();
    setIsListView(true);
    const order = {
      need,
      budget,
      category,
      startDate,
      endDate,
      specialReq,
      location,
      onlineTask,
      details,
    };

    setOrders([...orders, order]);
    resetFormInputs();
    setIsNextClicked(false);
  };


  const handleOrderSelect = (order) => {
    setSelectedOrder(order);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const resetFormInputs = () => {
    setNeed('');
    setBudget('');
    setCategory('');
    setStartDate('');
    setEndDate('');
    setSpecialReq('');
    setLocation('');
    setOnlineTask(false);
    setDetails('');
  };


  const sortOrders = (data) => {
    if (sortField) {
      return data.sort((a, b) => {
        const fieldValueA = a[sortField] || '';
        const fieldValueB = b[sortField] || '';

        if (sortField === 'number') {
          // Sorting by order.number
          return sortOrder === 'asc' ? fieldValueA - fieldValueB : fieldValueB - fieldValueA;
        } else if (sortField === 'startDate') {
          // Sorting by order.startDate
          return sortOrder === 'asc' ? new Date(fieldValueA) - new Date(fieldValueB) : new Date(fieldValueB) - new Date(fieldValueA);
        }

        // Fallback sorting by order number if the field is not recognized
        return a.number - b.number;
      });
    } else {
      return data;
    }
  };

  return (
    <>
      {!isNextClicked && !isListView && (
        <div className="form-container">
          <h1 className="form-title">Create a Service Request</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">What do you need done?</label>
              <input type="text" className="form-input" value={need} onChange={(e) => setNeed(e.target.value)} />
            </div>
            <div className="flex-container">
              <div className="form-field">
                <label className="form-label">Budget:</label>
                <input type="text" className="form-input" value={budget} onChange={(e) => setBudget(e.target.value)} />
              </div>
              <div className="form-field">
                <label className="form-label">Category:</label>
                <select className="form-input" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">select</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Construction">Construction</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Design">Design</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <div className="date-fields-container">
                <div className="date-field">
                  <label className="form-label">Start Date:</label>
                  <input type="date" className="form-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="date-field">
                  <label className="form-label">End Date:</label>
                  <input type="date" className="form-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
              </div>
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
            <div className="form-field">
              <label className="form-label">Details (optional):</label>
              <input type="text" className="form-input" value={details} onChange={(e) => setDetails(e.target.value)} />
            </div>
            <div className="form-actions">
              <button type="submit" className="form-submit-btn">
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {isNextClicked && !isListView && (
        <div>
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
              <div className="confirm-task-detail">
                 <div className="confirm-task-label">Details:</div>
                <div className="confirm-task-value">{details}</div>
              </div>
            </div>
            <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button className="form-back-btn" onClick={() => setIsNextClicked(false)}>Back</button>
              <button className="form-publish-btn" onClick={handlePublish}>Publish</button>
            </div>
          </div>
        </div>
      )}

      {isListView && (
        <div className="orders-container">
          <div className="order-summary-container">
            <div className="order-summary-header">
              <div className="order-summary-field" onClick={() => handleSort('number')}>
                Sort by: {sortField === 'number' && <span className="sort-arrow">{sortOrder === 'asc' ? '▲' : '▼'}</span>}
              </div>
              <div className="order-summary-field" onClick={() => handleSort('startDate')}>
                {sortField === 'startDate' && <span className="sort-arrow">{sortOrder === 'asc' ? '▲' : '▼'}</span>}
              </div>
            </div>
            {sortOrders(orders).map((order, index) => (
              <div
                key={index}
                className={`order-summary ${selectedOrder === order ? 'selected' : ''}`}
                onClick={() => handleOrderSelect(order)}
              >
                <p>Order: {"#" + (index + 1)}</p>
                <p><strong><span className="request-title">{order.need}</span></strong></p>
                <p>{order.location}</p>
                <p>{order.category}</p>
                <p>{order.location}</p>
                <p>{order.startDate}</p>
              </div>
            ))}
          </div>

          {selectedOrder && (
              <div className="summary-container">
                <h2>Summary</h2>
                <p><strong>Order</strong> {"#" + selectedOrder.number}</p>
                <p><strong>Request</strong> {selectedOrder.need}</p>
                <p><strong>Budget</strong> {selectedOrder.budget}</p>
                <p><strong>Category</strong> {selectedOrder.category}</p>
                <p><strong>Date start:</strong> {selectedOrder.startDate} <strong>end:</strong> {selectedOrder.endDate}</p>
                <p><strong>Location</strong> {selectedOrder.location}</p>
                <p><strong>Requirement</strong> {selectedOrder.requirement}</p>
                <p><strong>Description</strong> {selectedOrder.description}</p>
                <hr />
                <p>no any offer yet...</p>
              </div>
          )}
        </div>
      )}
    </>

  );
};

export default RequestServicePage;
