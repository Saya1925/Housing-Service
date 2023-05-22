//Junhui
//Similar to Make Offer
import React from 'react';

const ServicePublised = () => {
  return (
    <div 
      style={{
      border: '2px solid yellow',
      padding: '20px',
      background: 'url("image URL")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1>Create a service a request</h1>
      <p>Request:{} </p>
      <p>Budget: Category:{}</p>
      <p>Date:{}</p>
      <p>Location:{}</p>
      <p>Special Require:{}</p>
      <p>Desccription:{}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ marginRight: '10px' }}>Back</button>
        <button>Publish</button>
      </div>
    </div>
  );
};

export default ServicePublised;
