
import React, { useState } from 'react';
import { getElementError } from '@testing-library/react';

const MakeOffer = () => {
  const [formData, setFormData] = useState([
    {taskid : '#00123',
    Request: '30 X 40 ft Fence Intallation',
    Category: 'Gardening',
    Budget: '$250',
    Location: 'start : 2023/06/22 end : 2023/06/23',
    Requirement: 'N/A',
    Description: 'N/A'},
    {taskid : '#00124',
    Request: '30 X 40 ft Fence Intallation',
    Category: 'Gardening',
    Budget: '$250',
    Location: 'start : 2023/06/22 end : 2023/06/23',
    Requirement: 'N/A',
    Description: 'N/A'}
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const remove = document.getElementById('amountii');
     remove.value  = 'Junhui';
    console.log(formData);
  };

function RightComponent() {
return (
  <div>
    <h1>Summary</h1>
    <p>
    Request: '30 X 40 ft Fence Intallation',<br></br>
    Category: 'Gardening',<br></br>
    Budget: '$250',<br></br>
    Location: 'start : 2023/06/22 end : 2023/06/23',<br></br>
    Requirement: 'N/A',<br></br>
    Description: 'N/A</p>
  </div>
);
}

function LeftComponent() {
  return (
    <div>
      <h1>TaskID </h1>
      <p>taskid : '#00123',</p>
    </div>
  );
}

return (


  <html>
  <head>
    <title></title>
  </head>
  <body>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, backgroundColor: 'oriange' }}>
      <LeftComponent />
      </div>
      <div style={{ flex: 1, backgroundColor: 'lightgray' }}>
      <RightComponent />
      </div>
    </div>
  </body>
</html>

);
}

export default MakeOffer;
