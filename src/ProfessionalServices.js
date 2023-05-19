import React, { useState, useEffect } from 'react';
import './css/ProfessionalServices.css';

const ProfessionalServices = () => {
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
    const [isListView, setIsListView] = useState(true);
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [message, setMessage] = useState('');
    const [quotation, setQuotation] = useState('');

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

    // Function to get user rate and comments for a selected order
    const getUserRateAndComments = () => {
        // Replace with your logic to retrieve user rate and comments for the selected order
        return {
            rate: 4.5,
            comments: "Great service! Highly recommended."
        };
    };

    const handleOfferSubmit = () => {
        // Replace with your logic to handle the submission of the offer (message and quotation)
        console.log('Message:', message);
        console.log('Quotation:', quotation);
        // Clear the message and quotation inputs
        setMessage('');
        setQuotation('');
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
                            <div className="input-container">
                                <div className="input-column">
                                    <div className="message-input">
                                        <textarea
                                            placeholder="Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="input-column">
                                    <div className="quotation-container">
                                        <div className="quotation-input">
                                            <input
                                                type="text"
                                                placeholder="Quotation"
                                                value={quotation}
                                                onChange={(e) => setQuotation(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="quotation-note">Only visible to the customer</div>
                                    <div className="submit-offer">
                                        <button onClick={handleOfferSubmit}>Submit Offer</button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    )}

                </div>
            )}
        </>

    );
};

export default ProfessionalServices;
