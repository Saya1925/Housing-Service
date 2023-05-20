import React, { useState, useEffect } from 'react';
import './css/MembershipServices.css';

const RegisteredServices = () => {
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

    const [quotationValue, setQuotationValue] = useState('');

    // Load quotation value from localStorage on initial component mount
    useEffect(() => {
        const storedQuotationValue = localStorage.getItem('quotationValue') || '';
        setQuotationValue(storedQuotationValue);
    }, []);

    // Save quotation value to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('quotationValue', quotationValue);
    }, [quotationValue]);

    const handleSelect = () => {
        // Handle the logic for selecting the order
        console.log('Order selected:', selectedOrder);
        console.log('Quotation value:', quotationValue);
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
                            <div className="offer-container">
                                {getUserRateAndComments(selectedOrder) ? (
                                    <div className="rate-comment-container">
                                        <div className="rate">
                                            Rate: {Math.round(getUserRateAndComments(selectedOrder).rate)}{' '}
                                            {Array.from({ length: Math.round(getUserRateAndComments(selectedOrder).rate) }).map((_, index) => (
                                                <span key={index}>⭐</span>
                                            ))}
                                        </div>
                                        <div className="comment">
                                            <ul>
                                                <li>{getUserRateAndComments(selectedOrder).comments}</li>
                                            </ul>
                                        </div>
                                        <div className="quotation-info">
                                            <p>quotation {selectedOrder.quotation}</p>
                                            <p>{quotationValue}</p> {/* Display the quotation value */}
                                            <button className="select-button" onClick={handleSelect}>Select</button>
                                        </div>
                                    </div>
                                ) : (
                                    <p>No rate and comments yet...</p>
                                )}
                            </div>

                        </div>
                    )}
                </div>
            )}
        </>

    );
};

export default RegisteredServices;
