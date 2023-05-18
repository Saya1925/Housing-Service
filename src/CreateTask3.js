import React, { useState, useEffect } from 'react';
import './css/CreateTask.css';

const RequestServicePage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const isListView = true; // Define isListView based on your application's logic

  // Load orders from localStorage on initial component mount
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

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
              {/* Add more fields for sorting */}
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
            <div className="selected-order-details">
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
              </div>
              <hr />
              <div className="offer-container">
                <p>no any offer yet...</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RequestServicePage;
